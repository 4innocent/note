(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{399:function(a,s,t){a.exports=t.p+"assets/img/classloader.17310489.png"},418:function(a,s,t){"use strict";t.r(s);var l=t(56),v=Object(l.a)({},(function(){var a=this,s=a.$createElement,l=a._self._c||s;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("h1",{attrs:{id:"类加载器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[a._v("#")]),a._v(" 类加载器")]),a._v(" "),l("h2",{attrs:{id:"类加载系统"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#类加载系统"}},[a._v("#")]),a._v(" 类加载系统")]),a._v(" "),l("p",[a._v("类加载系统负责将类文件"),l("code",[a._v(".class")]),a._v("从本地或网络上加载到jvm的方法区中以便创建对象实例，加载系统只负责类文件的加载，文件是否能够运行有Execution Engine决定。"),l("br"),a._v(" "),l("code",[a._v(".class")]),a._v("文件的加载主要由类加载"),l("code",[a._v("classloader")]),a._v("负责，加载过程分为三个阶段")]),a._v(" "),l("ol",[l("li",[a._v("loading阶段：将类加载至jvm内存中，加载完成会生成一个该类的"),l("code",[a._v("java.lang.Class")]),a._v("对象")]),a._v(" "),l("li",[a._v("link阶段分为三步：\n"),l("ul",[l("li",[a._v("verify：验证阶段确保class类字节流文件符合jvm虚拟机规范")]),a._v(" "),l("li",[a._v("prepare：为类变量分配内存空间并设置初始值，不包括final修饰的static属性，final修饰的属性在编译阶段已经分配空间（不一定赋值），类变量会分配在方法区中（元空间），实例属性则会在实例创建时分配在堆内存中")]),a._v(" "),l("li",[a._v("resolve：将class文件中的符号引用转化为直接引用，")])])]),a._v(" "),l("li",[a._v("initialization阶段：初始化阶段就是执行构造类的构造器"),l("code",[a._v("<clinit>()")]),a._v("方法（jvm收集类变量的赋值动作和静态代码块自动生成），自动执行类静态属性赋值操作和静态代码块中的代码，此方法是线程安全的，如果有父类，jvm保证父类的该方法先执行然后再执行子类的"),l("code",[a._v("<clinit>()")]),a._v("方法，如果没有类变量和静态代码块则不会生成该方法。注意区分该方法和"),l("code",[a._v("<init>()")]),a._v("方法，"),l("code",[a._v("<init>()")]),a._v("方法是由根据构造类实例的构造器生成。")])]),a._v(" "),l("p",[l("img",{attrs:{src:t(399),alt:"加载过程"}})]),a._v(" "),l("h2",{attrs:{id:"加载器分类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#加载器分类"}},[a._v("#")]),a._v(" 加载器分类")]),a._v(" "),l("p",[a._v("JVM支持两种类加载器：引导类加载器(bootstrap classloader)和自定义类加载器(user-defined classloader)，在jvm中一般将派生自ClassLoader的类加载器成为自定义类加载器，虚拟机自带三种类加载器")]),a._v(" "),l("ul",[l("li",[a._v("启动类加载器（bootstrap classloader）\n"),l("ul",[l("li",[a._v("启动类加载器不继承自ClassLoader，没有父类加载器，并且指定自己为扩展类加载器和系统类加载器的父类")]),a._v(" "),l("li",[a._v("出于安全考虑启动类加载器只加载特定包名开头的类文件，如java、javax、sun等")])])]),a._v(" "),l("li",[a._v("扩展类加载器\n"),l("ul",[l("li",[a._v("派生于ClassLoader类")]),a._v(" "),l("li",[a._v("从java.ext.dirs环境变量或者jdk安装的jre/lib/ext文件夹下加载，用户jar放在此处也会被加载")]),a._v(" "),l("li",[a._v("父类加载器为引导类加载器")])])]),a._v(" "),l("li",[a._v("应用程序加载器（系统类加载器）\n"),l("ul",[l("li",[a._v("派生于ClassLoader，父类加载器为扩展类加载器")]),a._v(" "),l("li",[a._v("负责加载classpath环境变量或系统属性java.class.path指定路径下的类库")]),a._v(" "),l("li",[a._v("该加载器是默认的类加载器，一般情况java应用都是该类加载器加载，可由"),l("code",[a._v("ClassLoader.getSystemClassLoader()")]),a._v("获取")])])]),a._v(" "),l("li",[a._v("用户也可自定义类加载器以实现一些特殊功能")])]),a._v(" "),l("h2",{attrs:{id:"类加载器的一些api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#类加载器的一些api"}},[a._v("#")]),a._v(" 类加载器的一些api")]),a._v(" "),l("h3",{attrs:{id:"getparent"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#getparent"}},[a._v("#")]),a._v(" getParent")]),a._v(" "),l("ul",[l("li",[a._v("返回该类加载器的超类")])]),a._v(" "),l("h3",{attrs:{id:"loadclass-string-name"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#loadclass-string-name"}},[a._v("#")]),a._v(" loadClass(String name)")]),a._v(" "),l("ul",[l("li",[a._v("加载name类，返回一个java.lang.Class实例")])]),a._v(" "),l("h3",{attrs:{id:"findclass-string-name"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#findclass-string-name"}},[a._v("#")]),a._v(" findClass(String name)")]),a._v(" "),l("ul",[l("li",[a._v("查找name类，返回一个java.lang.Class实例")])]),a._v(" "),l("h3",{attrs:{id:"findloadedclass-string-name"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#findloadedclass-string-name"}},[a._v("#")]),a._v(" findLoadedClass(String name)")]),a._v(" "),l("ul",[l("li",[a._v("加载名为name的已加载类，返回一个java.lang.Class实例")])]),a._v(" "),l("h3",{attrs:{id:"defineclass-string-name-byte-b-int-off-int-len"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#defineclass-string-name-byte-b-int-off-int-len"}},[a._v("#")]),a._v(" defineClass(String name，byte[] b, int off, int len)")]),a._v(" "),l("ul",[l("li",[a._v("从字节数组中加载一个类，名称为name，返回一个java.lang.Class实例")])]),a._v(" "),l("h3",{attrs:{id:"resolveclass-class-czz"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#resolveclass-class-czz"}},[a._v("#")]),a._v(" resolveClass(Class<?> czz)")]),a._v(" "),l("ul",[l("li",[a._v("连接一个指定类")])]),a._v(" "),l("h2",{attrs:{id:"双亲委派机制"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派机制"}},[a._v("#")]),a._v(" 双亲委派机制")]),a._v(" "),l("p",[a._v("双亲委派机制可以防止人为覆盖系统启动类，具体流程为：")]),a._v(" "),l("ol",[l("li",[a._v("一个类加载器收到加载类请求，会转发给父类加载器")]),a._v(" "),l("li",[a._v("如果父类加载器还有超类加载器则继续向上传递")]),a._v(" "),l("li",[a._v("如果顶层加载器能完成加载，则加载完结束流程，否则依次向下传递加载任务直至加载成功，否则抛出异常")])]),a._v(" "),l("h2",{attrs:{id:"其他"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),l("ul",[l("li",[a._v("java中判断两个类对象是否一样需要满足两个条件\n"),l("ul",[l("li",[a._v("来自同一分类文件")]),a._v(" "),l("li",[a._v("由同一个classloader加载")])])]),a._v(" "),l("li",[a._v("Class类对象会保存加载自己的类加载器的引用")])])])}),[],!1,null,null,null);s.default=v.exports}}]);