---
sidebar: auto
---
# Nginx

## 简介
nginx可以用来做正向代理、反向代理、动静分离（静态文件直接返回减轻服务器压力）、负载均衡（将请求按规则分布到不同服务器减轻单一服务器压力）
## 常用命令
进入nginx安装目录的sbin文件夹下。  
1. 查看版本号
> ./nginx -V
2. 启动nginx
> ./nginx
3. 停止nginx
> ./nginx -s stop
4. 重新加载nginx配置文件
> ./nginx -s reload
## 配置文件
nginx配置文件分为全局块、events块、http块。
```nginx
#user  nobody;
worker_processes  1;  # 配置工作进程数
# 错误日志文件
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid; # 进程pid文件

# 单个进程支持的最大连接数
events {
    worker_connections  1024;
}

# 
http {
    include       mime.types; #文件扩展名和类型映射表
    default_type  application/octet-stream; #默认的文件类型
		#设置日志模式
    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
		#nginx访问日志的存放位置
    #access_log  logs/access.log  main;

    sendfile        on; #是否开启高效传输模式 on开启 off关闭
    #tcp_nopush     on; #减少网络报文段的数量

    #keepalive_timeout  0;
    keepalive_timeout  65; #保持连接的时间，也叫超时时间

    #gzip  on; #开启gzip压缩模式

		# 配置服务，可配置多个
    server {
        listen       80; #配置监听端口
        server_name  localhost; //配置域名

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html; #服务默认访问目录
            index  index.html index.htm; #默认访问文件
        }

        #error_page  404              /404.html; # 配置404页面

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html; #错误状态码的显示页面，配置后需要重启
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
}
```
## 负载均衡
```nginx
upstream  xxx.com {
  ip_hash;
  server 192.168.8.11:80;
  server 192.168.8.12:80 down;
  server 192.168.8.13:8009 max_fails=3 fail_timeout=20s;
  server 192.168.8.146:8080;
}
```
负载均衡算法：
- 轮询（默认采用轮询）
- Weight（权重值）：指定轮询权值，Weight值越大，分配到的访问机率越高，主要用于后端每个服务器性能不均的情况下；
- ip_hash：每个请求按访问IP的hash结果分配，这样来自同一个IP的访客固定访问一个后端服务器，有效解决了动态网页存在的session共享问题；
- fair、url_hash：这两种算法nginx默认不支持，需要添加相关软件包  

在负载均衡中还可以设置每个服务器的状态：
- down：表示本机器暂不参与负载均衡
- backup：备份机器。当其他所有的非backup机器出现故障或者忙的时候，才会请求backup机器，因此这台机器的压力最轻；
- max_fails：允许请求失败的次数，默认为1。当超过最大次数时，返回proxy_next_upstream 模块定义的错误；
- fail_timeout：在经历了max_fails次失败后，暂停服务的时间。max_fails可以和fail_timeout一起使用。
### server主机的配置
server的配置可以抽出在单独的文件中，然后通过include引入，方便修改。
```nginx
listen 80;  #监听端口
server_name 192.168.8.18 cszhi.com; # 用来指定转发的IP地址或者域名，多个域名之间用空格分开
index index.html index.htm index.php; # 用于设定访问的默认首页文件
root /root/www.cszhi.com #指定虚拟主机的网页根目录，这个目录可以是相对路径，也可以是绝对路径。
charset gb2312; # 设置网页的默认编码格式
# 指定此虚拟主机的访问日志存放路径，最后的main用于指定访问日志的输出格式。
access_log logs/www.ixdba.net.access.log main; 
```
### location
location支持正则表达式匹配，也支持条件判断匹配。用户可以通过location指令实现Nginx对动、静态网页进行过滤处理。

具体语法为：
```nginx
location [=|~|~*|^~] /uri/ {...}
```
- 以=开头表示精确匹配
- 以^~开头表示url以某个常规字符串开始，可以理解为匹配url路径。nginx不对url路径做编码，因此请求为/static/20%/aa可以被^~  /static/ /aa匹配
- 以~开头表示匹配区分大小写的正则匹配
- 以~*开头表示不区分大小写的正则匹配
- !~和!~*开头分别表示区分大小写的不匹配和不区分大小写的不匹配
- /表示匹配任意路径

多个location匹配优先级为精确匹配最优先，然后是上面的顺序从上到下，最后是/通配。

## 例子
### 反向代理
```nginx
location / {
    proxy_pass http://....com, # 被代理对象
}
```
### 设置资源的过期时间
```nginx
location ~ /.(jpg|css|js|font)$ {
  expries 1h; # 缓存一小时过期
}
```
### 禁止访问某个目录
```nginx
location / {
  root /root/static;
  deny all; # 禁止所有用户访问该目录
}
```
### 隐藏服务器版本号
```nainx
http{
  server_tokens off;
}
```
