---
sidebar: auto
---
# 高级部分

## 索引
### 索引语法
- 添加索引
``` sql
create [UNIQUE] index [indexname] on [tablename](columnname);
ALTER table [tablename] ADD [UNIQUE] index [indexname] on (columnname);
```
- 删除索引
``` sql
drop index [indexname] on [tablename];
```
- 查看索引
```sql
show index from [tablename];
```
### 索引的优缺点
索引能够加快搜索效率，也可以提高分组和排序的速度，但索引本身也是表，需要占用存储空间，一般索引大小为实际表数据的1.5倍大小。
### 索引的分类
索引分为主键索引、唯一索引、普通索引、全文索引、组合索引。
- 主键索引 PRIMARY KEY
  - 建立在主键上的索引，不允许重复，不允许有空值
- 唯一索引 UNIQUE
  - 建立索引的列不能有重复，但是可以为空
- 普通索引没有约束
- 全文索引 FULLTEXT
  - 用大文本对象构建的索引
- 组合索引
  - 使用多个列组成的索引，这多个列中不允许有空值
### B+ tree
基于B+ tree的索引的优点：
- 磁盘读写代价低  
索引也是一个表，要存储在外存中，读取外存的基本单位是扇区，操作系统是以页为基本单位管理内存，通常为4K。数据库的页通常是操作系统页的整数倍，因此索引节点设置为一个页的大小，每次读取的时候把整个节点内容读入内存，内存的速度远高于外存，因此影响索引查找速度的关键就在于IO的次数。B+ tree节点中不存放数据，因此节点能够存放更多索引信息，能够减少IO次数。
- 查询速度稳定  
B+ tree非叶子节点不存放数据，所有数据都在叶子结点，并且用顺序结构连接，所有叶子结点的高度都是一样的，因此查询数据速度一致。
## explain
性能分析可以使用explain，放在查询语句之前可以用来查看这条这条查询语句的具体执行细节：  
1. 表的执行顺序
2. 数据读取操作的操作类型
3. 哪些索引可能被使用
4. 哪些索引实际被使用
5. 表之间的引用
6. 每张表有多少行被优化器优化
### 使用explain
explain查询结果包括
| id | select_type | table | type | possible_keys | key |key_len | ref | rows| Extra|
|--|--|--|--|--|--|--|--|--|--|
- id
  - 相同大小从上到下执行
  - 不同大小从大到小执行
- select_type
  - simple：简单查询
  - primary: 主查询
  - derived：虚拟查询结果，如select * from (select  * from xxx)
  - union：联合查询
  - union result：联合查询结果
- table
  - 表名
- type（最重要）访问类型
  - 主要关注的有all、index、range、ref、eq_ref、const、system、null
  - 优化的由好到坏依次为system》const》eq_ref》ref》range》index》all
    - system：系统级访问
    - const：通过主键或者索引一次就能找到，如select * from table where id=1
    - eq_ref：唯一性索引扫描，对于每个索引建只有一条记录与之对应，常用于主键和唯一索引explain select * from t1 t2 where t1.id = t2.id：t1的索引是唯一索引，只有一条与t2对应
    - ref：非唯一性索引，可能找到多条记录与索引匹配，不是主键或唯一索引
    - range：范围检索，只检索一个给定范围的数据，常见于between、>、<、in等范围条件检索
    - index：索引检索，针对建了索引的表进行全索引扫描
    - all：全表扫描
  - 一般优化到index、range、ref即可
- possible_keys
  - 显示可能应用在本表上的索引，一个或多个，不一定被查询使用
- key
  - 实际使用的索引，如果为null，则没有使用索引
- key_len
  - 表示索引中使用的字节数，在不损失精度的情况下，字节数越少越好
- ref
  - 显示索引列中哪一个索引被使用了，可能为常量
- rows
  - 根据表信息及索引，统计出查到所需数据需要查找多少条数据记录
- Extra
  - 额外信息，重点关注以下几项
    - Using Filesort：使用了子索引，一般是由于没有按照已建索引顺序进行查询（order by），性能低下，需要优化
    - Using temporary：使用了临时表存储结果，常见于order by或者group by，可能原因是没有按照索引顺序进行查找，性能低下，需要优化
## 优化
### 单表优化
使用explain查询问题
### 双表优化
左连接索引建在右表，右连接索引建在左表。通常索引都是已经建好的，也就是说要变换左右连接。
### 三表优化
1. 小表驱动大表查询
2. 优先优化内查询
3. 保证被join的字段上的条件字段已经被索引
### 索引优化
索引有可能存在失效的情况，优化select语句有以下几条原则可以遵守：
1. 索引能全匹配最好
2. 最佳左前缀原则，从左到右依次匹配索引
3. 不再索引列上做sql操作（函数操作、类型转换等），会导致全表扫描
4. 存储引擎不能使用索引中范围条件右边的列，例如一个表有组合索引idx_nameAgePos，执行`SELECT * FROM staff where name = 'Alice' AND age > 21 AND pos = 'HR'`时，name，age索引能够使用，但age是范围索引，因此在其后的查询不能再使用索引，pos索引失效
5. 尽量使用覆盖索引（只访问索引的列），减少使用select *
6. mysql在使用不等于（!=、<>）时会导致全表扫描
7. is null、is not null也无法使用索引
8. like匹配以通配符%开头会导致全表扫描，因此%一般放在右边，如果必须使用%()%，可以使用覆盖索引
9. 字符串不加单引号会导致索引失效
10. 少用or，用它也会索引失效
### 小表驱动大表
- 主查询为大表时用in，首先查询后边的小表
```sql
select * from a where a.id in (select * from b);
```
- 主查询为小表时用exists，首先查询前边的小表
```sql
select * from a where exists (select 1 from b where a.id = b.id);
```
### order by排序优化
order by排序尽量使用索引方式排序，避免使用filesort，无法避免使用filesort可以增大sort_buffer_size参数和max_length_for_sort_data的设置来进行优化
## 利用日志排查问题
### 使用慢查询日志
```sql
-- 首先要开启慢查询日志
show variables like "%slow_query_log%"  -----查询是否开启了慢查询日志
set global slow_query_log = 1     --------开启慢查询日志，只对本次会话有效
show variables like "%long_query_time%"   ----查询多长时间算一条慢查询sql
set global long_query_time = 3    -------- 设置一条慢查询的阈值，需要新开会话
-- 使用mysqldumpslow命令分析日志文件
```
### show profile
找到慢sql语句后，可以使用explain分析优化，还可以使用show profile进一步分析sql语句，使用navicat默认开启。  
```sql
show variables like "%profiling%" ----- 查询profiling开启状态
set profiling = on;  --------- 开启profiling
show profiles; ------ 查询会话所有查询运行状况
show profile cpu,block io for query (id)  -------- 查询某条query语句的具体执行信息，navicat工具能够在查询结果中直接分析某条语句的运行信息
```
日常需要注意的几种情况  
1. converting heap to MyISAM：查询数据太大，内存不够用，开始使用磁盘
2. create temp table：创建临时表，copy数据到临时表，用完再删除
3. copying to temp table to disk：copy临时表到磁盘文件，危险<span style="color:red">:warning:</span>
4. locked
## 锁
### 简介
mysql的锁按照功能可划分为读锁和写锁，按照种类可划分为表锁和行锁。MyISAM只支持表锁，InnoDB支持行锁，因此MyISAM适合读多写少的场景，InnoDB适合写数据较多的场景。
### 表锁
```sql
show open tables; --- 查询当前数据库的表锁，in_use为1表示表被锁
lock table table-name read(write)   ------- 以读（锁）方式锁定某张表，多张表以,分割
unlock tables ------- 解锁所有锁定表
```
MyISAM引擎默认给所有表加读锁，表读锁不会阻塞其他会话读该表，但会阻塞本表的写操作。表写锁会阻塞其他会话对本表的读写。
### 行锁
InnoDB自动为表加行锁，支持事务。
隔离级别分为  
更新丢失（后一个事物覆盖了前一个事物的操作）  
脏读（一个事物读取到了另一个事物已修改未提交的数据）   
不可重复读（一个事物读取到了另一个事物已提交的数据）  
幻读（一个事物读取到了另一个事物新增的数据）  
默认的隔离级别为Repeat-Read（可重复读）避免了脏读、不可重复读、更新丢失。  
**行锁在未提交的情况下操作同一行时会阻塞**，<span style="color:red">索引失效会导致行锁变为表锁（如varchar类型未加单引号）</span>，当数据操作在一个范围内时（where）范围中的数据即使不存在也会被锁，间歇锁。  
- 锁定某一行
  - `select * from table where id = 1 for update;`，通过for update来锁定某一行



