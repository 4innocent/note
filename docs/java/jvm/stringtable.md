# StringTable

## 介绍
- String字符串实现了Serializable表示可被序列化，实现了Comparable表示可以进行比较。
- java8及以前String内部使用final char[] value存储，java9开始使用byte[]存储
## String的不可变性
java中的String具有不可变性，表现为：
- 当对字符串重新赋值时，会重新分配内存空间，定义内容
- 当对现有字符串进行连接操作时也会重新分配空间，定义内容
- 当对字符串进行replace时也会重新分配空间，定义内容
- String Pool内部使用Hash Table存储，保证不会重复
## String的内存分配
- 使用`""`创建的字符串会直接放入常量池中
- 其他方式声明的String对象可以使用intern()方法
## 字符串拼接
1. 字符串常量的拼接在编译期会进行优化，class文件中已经拼接完成，类加载后直接放入字符串常量池中
2. 只要拼接过程中有变量参与，则String对象直接放入堆中，<span style="color:red">如果该变量定义为final，则也会在编译期进行优化放入字符串常量池中</span>
3. 对拼接结果调用intern方法则直接放入常量池中，并返回地址
## intern方法 
如果不是使用双引号`""`声明的String，可以调用String的intern()方法将其放入字符串常量池中节省内存空间。放入之前会检查常量池中是否已经有该字符串，如果有则直接返回该字符串地址，如果没有则将该字符串对象的地址存入字符串常量池（jdk7开始）。  
当网站需要存储大量字符串时，可以调用intern方法减少内存消耗。

G1垃圾回收器会进行String去重操作优化内存空间。