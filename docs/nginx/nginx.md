# Tomcat/Nginx调优策略
## Tomcat调优
``` xml
线程池配置
<!-- server.xml -->
<Connector port="8080" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443"
           maxThreads="500"
           minSpareThreads="50"
           maxConnections="10000"
           acceptCount="200"
           keepAliveTimeout="30000"
           maxKeepAliveRequests="100"
           compression="on"
           compressionMinSize="2048"
           compressableMimeType="text/html,text/xml,text/plain,application/json"/>
```
参数说明：  
- maxThreads：最大工作线程数 -> 200-500
- minSpareThreads: 最小空闲线程数 -> 50
- maxConnections：最大连接数 -> 10000
- acceptCount: 等待队列长度 -> 200
- connectionTimeout: 连接超时（ms） -> 20000
## JVM参数调优
``` shell
# catalina.sh
JAVA_OPTS="-server \ 
    -Xms4g -Xmx4g \ 
    -Xmn2g \ 
    -XX:MetaspaceSize=256m \ 
    -XX:MaxMetaspaceSize=512m \ 
    -XX:+UseG1GC \ 
    -XX:MaxGCPauseMillis=200 \ 
    -XX:G1HeapRegionSize=16m \ 
    -XX:+HeapDumpOnOutOfMemoryError \ 
    -XX:HeapDumpPath=/logs/heapdump.hprof \ 
    -XX:+PrintGCDetails \ 
    -XX:+PrintGCDateStamps \ 
    -Xloggc:/logs/gc.log"
```
参数说明：
- Xms -> 初始化是最小堆内存大小
- Xmx -> 允许最大堆内存大小
- Xmn -> 年轻代大小
- XX:MatespaceSize -> 初始化元空间大小
- XX:MaxMetespaceSize -> 最大元空间大小

## Nginx调优

### 采用epoll多路复用

### woker进程设置为auto
自动识别CPU核心数，每个woker
