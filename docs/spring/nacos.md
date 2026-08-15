## Spring Cloud Nacos
#### 配置加载优先级（数字越小优先级越高）
1、命令行参数  如：--server.posrt=8080  
2、系统属性 System.setProperty 如：-Dserver.port=8080  
3、操作系统环境变量 如：SERVER_PORT=8080  
4、Nacos远程配置中心 通过spring.cloud.nacos.config拉取的配置  
5、application-{profile}.yml（本地/jar包内） 如：application-prod.yml  
6、application.yml（本地/jar包内）  
7、bootstrap-{profile}.yml（引导阶段profile配置） 通常用于连接nacos  
8、bootstrap.yml 用于初始化Nacos客户  端

#### nacos动态刷新配置原理
- 客户端在上线时会向nacos服务端注册自己并订阅所需的配置  
- 刷新原理：长轮询或事件监听  
    1、长轮询（Long polling）：客户端定期向nacos服务端发送请求，询问是否有新配置可用  
    2、事件监听：Nacos服务器在配置更新时，会向所有订阅了该配置的客户端发送事件通知  

- 配置的动态加载  
    1、收到事件通知：客户端收到事件通知后，会主动向nacos服务器拉取最新配置  
    2、本地缓存：拉取的最新配置会缓存在本地，以减少对服务器的请求  
    3、应用重启：