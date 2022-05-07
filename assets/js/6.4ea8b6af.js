(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{400:function(v,t,_){v.exports=_.p+"assets/img/堆空间.172e131b.png"},401:function(v,t,_){v.exports=_.p+"assets/img/对象空间分配流程.92dbc2e3.svg"},420:function(v,t,_){"use strict";_.r(t);var i=_(56),a=Object(i.a)({},(function(){var v=this,t=v.$createElement,i=v._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"堆"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[v._v("#")]),v._v(" 堆")]),v._v(" "),i("h2",{attrs:{id:"介绍"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),i("ul",[i("li",[v._v("一个JVM实例只存在一个堆内存，堆是jvm内存管理的核心区域，堆的大小在jvm创建时就已经确定，所有线程都共享堆内存，线程私有的缓冲区（Thread Local Allocation Buffer TLAB）也在堆中")]),v._v(" "),i("li",[v._v("几乎所有对象实例和数组都应当在运行时分配在堆中，在方法结束后堆中的对象不会马上移除，而是在垃圾回收时移除")]),v._v(" "),i("li",[v._v("现代垃圾收集器大部分基于分代收集理论设计，java7及之前分为新生代、老年代、永久代，java8及以后分为新生代、老年代、元空间\n"),i("img",{attrs:{src:_(400),alt:"堆空间"}})])]),v._v(" "),i("h2",{attrs:{id:"配置堆"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置堆"}},[v._v("#")]),v._v(" 配置堆")]),v._v(" "),i("ul",[i("li",[v._v("-Xms：用于配置起始堆大小")]),v._v(" "),i("li",[v._v("-Xmx：用于配置堆区的最大内存")])]),v._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),i("p",[v._v("通常会将-Xms和-Xmx配置为相同大小，目的是为了在垃圾回收完毕后不再重新分割计算堆区大小，从而提高性能"),i("br"),v._v("\n默认情况下：初始内存为物理机cpu的1/64，最大内存为物理机的1/4")])]),v._v(" "),i("h2",{attrs:{id:"年轻代与老年代"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#年轻代与老年代"}},[v._v("#")]),v._v(" 年轻代与老年代")]),v._v(" "),i("p",[v._v("堆区可细分为年轻代和老年代，年轻代又可分为Eden区、Survivor0区（form区）、Survivor1区（to区），在hotspot中Eden和两个S0,S1区的默认空间占比为8:1:1，几乎所有对象都是在Eden区被new出来的")]),v._v(" "),i("h2",{attrs:{id:"对象分配"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#对象分配"}},[v._v("#")]),v._v(" 对象分配")]),v._v(" "),i("ol",[i("li",[v._v("新创建出的对象都是存放在Eden区")]),v._v(" "),i("li",[v._v("当Eden区空间不足时会触发minor GC，回收不再被引用的对象，将剩余对象存放到survivor区，再将新建对象存放到Eden区")]),v._v(" "),i("li",[v._v("当再次触发minor GC时，Eden区剩余对象移动到S1区，S0此时变为from区，S1区变为to区，将S0区中对象放到S1区")]),v._v(" "),i("li",[v._v("如果经过多次minor GC后对象依然存在于新生代（S0、S1）中，则会被放到老年代中，默认经历GC次数为15次")])]),v._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),i("p",[v._v("可以通过-XX:MaxTenuingThreshold=<N>来设置这个次数")])]),v._v(" "),i("ol",{attrs:{start:"5"}},[i("li",[v._v("如果老年代空间不足就会发生major GC，major GC对整个堆空间进行GC")]),v._v(" "),i("li",[v._v("如果GC后依然空间不足，则会报OOM错误\n"),i("img",{attrs:{src:_(401),alt:"对象分配流程"}})])]),v._v(" "),i("h2",{attrs:{id:"gc分类"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gc分类"}},[v._v("#")]),v._v(" GC分类")]),v._v(" "),i("p",[v._v("GC分为Minor GC、Major GC、Full GC，在jvm中大部分回收都在新生代执行。针对hotspot虚拟机，按照回收区域分为了两大类：部分收集和整堆收集。")]),v._v(" "),i("ul",[i("li",[v._v("年轻代GC触发时机：\n"),i("ul",[i("li",[v._v("当年轻代空间不足（Eden区满，Surivor区满不会触发）时就会触发Minor GC")]),v._v(" "),i("li",[v._v("Minor GC执行时会引发STW，暂停用户线程，等垃圾回收完毕才能恢复运行")])])]),v._v(" "),i("li",[v._v("老年代GC触发时机：\n"),i("ul",[i("li",[v._v("对象从老年代消失时就发生了Major GC或Full GC")]),v._v(" "),i("li",[v._v("当Major GC发生时通常都伴随着Minor GC")]),v._v(" "),i("li",[v._v("Major GC速度慢，STW时间更长")])])]),v._v(" "),i("li",[v._v("Full GC触发时机：\n"),i("ul",[i("li",[v._v("调用System.gc()时，系统建议执行GC，不一定执行")]),v._v(" "),i("li",[v._v("老年代空间不足时")]),v._v(" "),i("li",[v._v("方法区内存不足时")]),v._v(" "),i("li",[v._v("通过Minor GC进入老年代的平均大小大于老年代可用内存")]),v._v(" "),i("li",[v._v("由Eden区、Survivor的From区想Survivor的To区复制时空间不足，转而向old区复制空间依然不足")])])])]),v._v(" "),i("h2",{attrs:{id:"参数设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#参数设置"}},[v._v("#")]),v._v(" 参数设置")]),v._v(" "),i("ul",[i("li",[v._v("-XX:+PrintFlagsInitial：查看参数的初始值")]),v._v(" "),i("li",[v._v("-XX:+PrintFlagsFinal：查看参数的最终值")]),v._v(" "),i("li",[v._v("-Xms：配置堆空间的初始大小")]),v._v(" "),i("li",[v._v("-Xmx：配置堆空间的最大内存")]),v._v(" "),i("li",[v._v("-Xmn：设置新生代空间大小")]),v._v(" "),i("li",[v._v("-XX:NewRatio：设置新生代与老年代在堆中的空间占比")]),v._v(" "),i("li",[v._v("-XX:SurvivorRatio：设置新生代中Eden与Survivor区的占比")]),v._v(" "),i("li",[v._v("-XX:MaxTenuringThreshold：设置新生代垃圾的最大年龄")]),v._v(" "),i("li",[v._v("-XX:PringGCDetails：输出GC的详细信息")])]),v._v(" "),i("h2",{attrs:{id:"逃逸分析"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#逃逸分析"}},[v._v("#")]),v._v(" 逃逸分析")]),v._v(" "),i("p",[v._v("一个局部变量在方法执行中自始至终都没有逃离本方法，则表示该变量没有发生逃逸"),i("br"),v._v("\n根据逃逸分析结果可以做以下优化：")]),v._v(" "),i("ul",[i("li",[v._v("栈上分配：将堆分配转化为栈分配")]),v._v(" "),i("li",[v._v("同步省略：一个共享数据没有逃逸，则没有必要同步，执行消锁")]),v._v(" "),i("li",[v._v("对象分解标量替换：一个对象变量没有逃逸，则可以用该对象内部的基本属性来替换这个对象")])])])}),[],!1,null,null,null);t.default=a.exports}}]);