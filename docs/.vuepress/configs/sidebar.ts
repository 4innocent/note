import { SidebarConfig4Multiple } from "vuepress/config";

export const sidebar: SidebarConfig4Multiple = {
  "/java/": [
    {
      title: "基础",
      children: [["", "介绍"]],
    },
    {
      title: "JVM相关",
      children: [
        ["/java/jvm/", "介绍"],
        ["/java/jvm/classloader", "类加载"],
        ["/java/jvm/runtimeandthread", "运行时数据区"],
        ["/java/jvm/jvmstack", "虚拟机栈"],
        ["/java/jvm/localmethod", "本地方法"],
        ["/java/jvm/heap", "堆"],
        ["/java/jvm/methodarea", "方法区"],
        ["/java/jvm/newinstance", "对象创建"],
        ["/java/jvm/stringtable", "字符串常量池"],
        ["/java/jvm/garbagecollection", "垃圾回收"],
        ["/java/jvm/cmdtools", "命令行工具"],
      ],
    },
    {
      title: "Java多线程",
      children: [["/java/multiplethread/", "介绍"]],
    },
  ],
};
