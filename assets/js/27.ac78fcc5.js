(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{429:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("nginx可以用来做正向代理、反向代理、动静分离（静态文件直接返回减轻服务器压力）、负载均衡（将请求按规则分布到不同服务器减轻单一服务器压力）")]),t._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("p",[t._v("进入nginx安装目录的sbin文件夹下。")]),t._v(" "),a("ol",[a("li",[t._v("查看版本号")])]),t._v(" "),a("blockquote",[a("p",[t._v("./nginx -V")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("启动nginx")])]),t._v(" "),a("blockquote",[a("p",[t._v("./nginx")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("停止nginx")])]),t._v(" "),a("blockquote",[a("p",[t._v("./nginx -s stop")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("重新加载nginx配置文件")])]),t._v(" "),a("blockquote",[a("p",[t._v("./nginx -s reload")])]),t._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("p",[t._v("nginx配置文件分为全局块、events块、http块。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#user  nobody;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_processes")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置工作进程数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 错误日志文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log  notice;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log  info;")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#pid        logs/nginx.pid; # 进程pid文件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个进程支持的最大连接数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("events")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v("       mime.types")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#文件扩展名和类型映射表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default_type")]),t._v("  application/octet-stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认的文件类型")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置日志模式")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#                  '$status $body_bytes_sent \"$http_referer\" '")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#nginx访问日志的存放位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/access.log  main;")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sendfile")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#是否开启高效传输模式 on开启 off关闭")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on; #减少网络报文段的数量")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#keepalive_timeout  0;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keepalive_timeout")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#保持连接的时间，也叫超时时间")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on; #开启gzip压缩模式")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置服务，可配置多个")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置监听端口")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //配置域名\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/host.access.log  main;")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#服务默认访问目录")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("  index.html index.htm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认访问文件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page  404              /404.html; # 配置404页面")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# redirect server error pages to the static page /50x.html")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#错误状态码的显示页面，配置后需要重启")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" = /50x.html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    proxy_pass   http://127.0.0.1;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    root           html;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_pass   127.0.0.1:9000;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_index  index.php;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    include        fastcgi_params;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deny access to .htaccess files, if Apache's document root")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# concurs with nginx's one")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ /\\.ht {")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    deny  all;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# another virtual host using mix of IP-, name-, and port-based configuration")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       8000;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       somename:8080;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    server_name  somename  alias  another.alias;")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    location / {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        root   html;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        index  index.html index.htm;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTPS server")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       443 ssl;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    server_name  localhost;")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_certificate      cert.pem;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_certificate_key  cert.key;")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_session_cache    shared:SSL:1m;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_session_timeout  5m;")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_ciphers  HIGH:!aNULL:!MD5;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_prefer_server_ciphers  on;")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    location / {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        root   html;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        index  index.html index.htm;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v("  xxx.com")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ip_hash")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" 192.168.8.11:80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" 192.168.8.12:80 down")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" 192.168.8.13:8009 max_fails=3 fail_timeout=20s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" 192.168.8.146:8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("负载均衡算法：")]),t._v(" "),a("ul",[a("li",[t._v("轮询（默认采用轮询）")]),t._v(" "),a("li",[t._v("Weight（权重值）：指定轮询权值，Weight值越大，分配到的访问机率越高，主要用于后端每个服务器性能不均的情况下；")]),t._v(" "),a("li",[t._v("ip_hash：每个请求按访问IP的hash结果分配，这样来自同一个IP的访客固定访问一个后端服务器，有效解决了动态网页存在的session共享问题；")]),t._v(" "),a("li",[t._v("fair、url_hash：这两种算法nginx默认不支持，需要添加相关软件包")])]),t._v(" "),a("p",[t._v("在负载均衡中还可以设置每个服务器的状态：")]),t._v(" "),a("ul",[a("li",[t._v("down：表示本机器暂不参与负载均衡")]),t._v(" "),a("li",[t._v("backup：备份机器。当其他所有的非backup机器出现故障或者忙的时候，才会请求backup机器，因此这台机器的压力最轻；")]),t._v(" "),a("li",[t._v("max_fails：允许请求失败的次数，默认为1。当超过最大次数时，返回proxy_next_upstream 模块定义的错误；")]),t._v(" "),a("li",[t._v("fail_timeout：在经历了max_fails次失败后，暂停服务的时间。max_fails可以和fail_timeout一起使用。")])]),t._v(" "),a("h3",{attrs:{id:"server主机的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server主机的配置"}},[t._v("#")]),t._v(" server主机的配置")]),t._v(" "),a("p",[t._v("server的配置可以抽出在单独的文件中，然后通过include引入，方便修改。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#监听端口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" 192.168.8.18 cszhi.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用来指定转发的IP地址或者域名，多个域名之间用空格分开")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" index.html index.htm index.php")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用于设定访问的默认首页文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /root/www.cszhi.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定虚拟主机的网页根目录，这个目录可以是相对路径，也可以是绝对路径。")]),t._v("\ncharset gb2312")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置网页的默认编码格式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定此虚拟主机的访问日志存放路径，最后的main用于指定访问日志的输出格式。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" logs/www.ixdba.net.access.log main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" location")]),t._v(" "),a("p",[t._v("location支持正则表达式匹配，也支持条件判断匹配。用户可以通过location指令实现Nginx对动、静态网页进行过滤处理。")]),t._v(" "),a("p",[t._v("具体语法为：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" [=|~|~*|^~] /uri/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("以=开头表示精确匹配")]),t._v(" "),a("li",[t._v("以^~开头表示url以某个常规字符串开始，可以理解为匹配url路径。nginx不对url路径做编码，因此请求为/static/20%/aa可以被^~  /static/ /aa匹配")]),t._v(" "),a("li",[t._v("以~开头表示匹配区分大小写的正则匹配")]),t._v(" "),a("li",[t._v("以~*开头表示不区分大小写的正则匹配")]),t._v(" "),a("li",[t._v("!~和!~*开头分别表示区分大小写的不匹配和不区分大小写的不匹配")]),t._v(" "),a("li",[t._v("/表示匹配任意路径")])]),t._v(" "),a("p",[t._v("多个location匹配优先级为精确匹配最优先，然后是上面的顺序从上到下，最后是/通配。")]),t._v(" "),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("h3",{attrs:{id:"反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[t._v("#")]),t._v(" 反向代理")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass http://....com, "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 被代理对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"设置资源的过期时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置资源的过期时间"}},[t._v("#")]),t._v(" 设置资源的过期时间")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~ /.(jpg|css|js|font)$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("expries")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1h")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存一小时过期")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"禁止访问某个目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止访问某个目录"}},[t._v("#")]),t._v(" 禁止访问某个目录")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /root/static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deny")]),t._v(" all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止所有用户访问该目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"隐藏服务器版本号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏服务器版本号"}},[t._v("#")]),t._v(" 隐藏服务器版本号")]),t._v(" "),a("div",{staticClass:"language-nainx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http{\n  server_tokens off;\n}\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);