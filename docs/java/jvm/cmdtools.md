# 命令行工具

## jps
用来查询正在运行的jvm虚拟机进程
## jstat
查看jvm的统计信息，显示jvm虚拟机中的类加载情况、内存、垃圾收集等信息

``` shell
jstat -class pid # 查看类的加载情况
jstat -class -t pid # 查看类的加载情况和程序执行了多长时间
jstat -gc pid # 查看GC信息
jstat -class pid 1000 10 # 查询类的加载情况，每隔一秒打印一次，一共打印10次
```
-t：显示程序执行了多长时间，可以依此计算垃圾回收占程序运行时间的比例
- 编译相关
  - -class：显示类加载情况
- GC相关
  - -gc：显示Survivor0区、Survivor1区、Eden区、old区、方法区内存大小及占用情况，YGC、FGC次数以及消耗时间
  - -gcutil：信息显示为占比
- JIT相关：
  - -compiler：JIT编译信息
## jinfo
查看、修改当前运行的虚拟机参数
``` shell
jinfo -sysprops pid # 查看系统参数等同于调用System.getProperties()
jinfo -flags pid # 查看系统被赋过值的一些参数
jinfo -flag 参数名 pid # 查看具体参数
```
``` shell
jinfo -flag +PrintGCDetails PID # 修改布尔类型参数
jinfo -flag 参数名=值 PID # 修改值类型参数
```
## jmap
jmap可以获取堆转储快照文件或者获取堆内存相关信息
-dump：生成java堆转储文件，<span style="color:red">常用</span>
-heap：输出整个堆的信息
-histo：输出堆中类变量的信息
- 使用一：
  - 手动使用
``` shell
jmap -dump:format=b,file=<filename.hprof> <pid> # 转储堆中所有对象
jmap -dump:live,format=b,file=<filename.hprof> <pid> # 只转储堆中存活的对象，可以减小生成文件大小，常用
```
  - 自动使用，在发生异常时自动收集，文件过大可能会出问题
``` shell
# 设置jvm参数，在发生OOM时自动生成hprof文件，有时文件过大会出问题
-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=<filename.hprof>
```
- 使用二
``` shell
jmap -heap <pid> # 显示堆内存信息
jmap -histo <pid> # 显示堆内对象信息
```
## jstack
查看虚拟机堆栈信息
## jcmd
可以用来实现除了jstat外的所有命令功能
``` shell
jcmd <pid> help # 查看当前线程可用的所有线程
jcmd <pid> <命令> # 查看相关内容信息
```