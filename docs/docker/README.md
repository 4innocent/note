---
sidebar: auto
---
# Docker

## 介绍
docker三要素：镜像、容器、仓库。
- 镜像：一个只读模板，用来创建docker容器
- 容器：容器为镜像提供了一个安全、隔离的运行环境，容器可以启动、开始、停止、删除
- 仓库：集中存放容器的地方
## 安装
[安装docker](https://docs.docker.com/engine/install/)
## 常用命令
### 启动类命令
- systemctl start docker
  - 启动docker
- systemctl stop docker
  - 停止docker
- systemctl restart docker
  - 重启docker
- systemctl enable docker
  - 开机自启动docker
- systemctl status docker
  - 查看docker服务状态信息
- docker info
  - 查看docker概要信息
- docker --help
  - 查看docker帮助
- docker 命令 --help
  - 查看命令帮助
### 镜像类命令
- docker images
  - 列出docker中的镜像，-a显示本地所有镜像，-q只显示镜像ID
- docker search 镜像
  - 查看仓库中是否有该镜像
- docker pull 镜像[:tag]
  - 拉去镜像[指定版本]
- docker system df
  - 查看docker镜像/容器/数据卷所占空间
- docker rmi 镜像
  - 删除镜像，多个镜像以空格隔开
### 容器命令
- docker run 镜像
  - 以该镜像添加一个容器实例
    - --name：为容器设置一个名字
    - -i：以交互命令运行，通常与-t配合使用
    - -t：重新生成一个终端
    - -p [port]:[port]：指定端口映射
    - -P：随机端口映射
    - -d：以守护线程方式启动
- docker ps
  - 列出docker运行的实例
    - -a：列出正在运行和曾经运行的容器
    - -l：显示最近创建的容器
    - -n：显示最近创建的n个容器
    - -q：只显示容器编号
- docker restart 容器编号或名字
  - 启动已经停止容器，或者重启容器
- docker stop 容器编号或名字
  - 停止容器
- docker kill 容器编号或名字
  - 强制停止容器
- docker rm 容器编号或名字
  - 删除已经停止的容器
- docker logs 容器编号
  - 查看容器实例运行日志
- docker top 容器编号
  - 相当于在容器内部执行top
- docker inspect 容器编号
  - 查看docker内部细节，json形式
- docker exec -it 容器编号 bash
  - 重新进入容器并打开一个伪终端，退出后不会关闭容器
- docker cp 容器编号:文件路径>拷贝目的地
  - 拷贝容器中的文件到本地
- docker export 容器编号 > 文件名.tar
  - 将容器导出为一个tar文件，对应import
- cat 文件名.tar | docker import - 镜像用户名/镜像名字:镜像版本号
  - 将tar文件导入生成一个镜像，保留之前容器的所有信息
- docker commit -m="镜像描述信息" -a="镜像作者" 容器编号 要创建的镜像名称:镜像版本号
  - 生成一个镜像文件
## 容器数据卷
容器数据卷能够持久化容器内的数据，在容器意外关闭时防止数据丢失，宿主机和容器能够共享数据卷内数据。运行一个带有数据卷的容器命令为：
```docker
# ro read only 容器只能读
# rw read write 容器可读写，默认规则
docker run -it --privileged=true -v /宿主机绝对路径目录:容器内目录:[ro|rw] 镜像名称
```
可以通过`docker inspect 容器id或名字`查看数据卷是否映射正确。
``` 
"Mounts": [
    {
        "Type": "bind",
        "Source": "/temp/redis-data", 
        "Destination": "/temp/redis-data",
        "Mode": "",
        "RW": true,
        "Propagation": "rprivate"
    },
],
```
容器也可以继承其他容器的数据卷规则
```docker
docker run -d --name=u2 --privileged=true --volumes-form=夫容器 镜像名字
```
## Docker File
docker file就是执行文件中的相关指令生成一个定制的镜像，进而简化配置镜像过程
### 保留字
- FROM
  - 生成的镜像文件是基于哪一个镜像
- MAINTAINER
  - 镜像的作者信息
- RUN
  - 镜像构建时需要执行的命令，支持bash和exec，在build时执行
- EXPOSE
  - 当前容器监听的端口，要做端口映射需要使用-p
- WORKDIR
  - 镜像在容器内部的工作目录
- ENV
  - 在构建过程中设置环境变量
- VOLUME
  - 设置数据卷
- ADD
  - 将宿主机下的文件拷贝进镜像并且会自动处理url路径并解压
- COPY
  - 将文件copy进镜像目录
- CMD
  - 指定镜像创建容器后执行的命令，支持bash和exec两种格式，多个CMD指令只执行最后一个，docker run后的参数会覆盖CMD中的指令
  - RUN指令在build时执行，CMD指令在run时执行
- ENTRYPOINT
  - 功能和CMD类似，但是有ENTRYPOINT时CMD只当传递参数使用，他们两个的组合会变成[ENTRYPOINT] [CMD]，此外ENTRYPOINT的执行的命令不会被docker run传入参数覆盖，但是还是会覆盖CMD命令，此时CMD类似默认参数
### 使用Docker File文件
默认不指定名字时，文件名字需要为Dockerfile。
```shell
#根据指定path下的docker file生成镜像并指定tag名字，path为.表示当前目录为build上下文
docker build -t tag path
```
## docker的网络模式
可以使用`docker network --help`来查看docker的网络信息。  docker常用的网络模式有bridge和host，区别在于bridge模式会在容器内创建虚拟的ip和端口，host直接使用主机的ip和端口。

要设置docker的net模式可以在启动容器实例时通过`--net host`设置

## compose容器编排
docker compose能够管理多个docker实例，规定他们的启动顺序，一起启动，一起停止，方便管理大规模docker实例。具体可以参考官网用法[compose用法](https://docs.docker.com/get-started/08_using_compose/)
