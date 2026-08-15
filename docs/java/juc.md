# JUC并发

## 并发编程的三大要素
### 原子性

### 可见性

### 有序性

## synchronized与volatile

### synchronized与volatile有什么区别

### synchronized怎么保证线程安全

### synchronized的锁升级、锁粗化、锁消除

### synchronized升级优化的历史演进
https://cloud.tencent.com/developer/article/2398496

### synchronized的实现设计哪些底层操作系统的支持
https://cloud.tencent.com/developer/article/2398496



## 什么是CAS？
### CAS适用什么场景？
## 什么是AQS?
### AQS适用什么场景

## Threadlocal是什么

## 实现多线程的几种方式
1、继承Thread类，重写run方法
2、实现Runable接口，解决单继承实现性
3、实现Callable接口，支持返回值和异常处理，需用FutureTask处理
4、使用线程池，创建线程池，复用线程，减少创建销毁开销

## 线程池
### 线程池种类
1、FixThreadPool：固定大小线程池，核心线程与最大线程一致，使用无界队列，使用负载稳定，限制并发的业务场景
2、CachedThreadPool：核心线程为零，最大线程数无限，使用同步队列，适用大量短期突发任务，存在OOM风险
3、SingleThreadExecutor：单线程池，仅一个工作线程，保证任务FIFO顺序执行，适用串行化执行任务
4、ScheduledThreadPool：定期任务线程池，支持延迟、周期性任务执行，最大线程数无设为无限，适合定时调度场景
5、WorkStealingPool：工作窃取线程池，多队列并行处理，通过“工作窃取”算法实现任务的动态负载均衡，能够有效提升多核 CPU 的利用率。适用CPU密集型计算任务，比较占用资源

### 线程池参数
1、corePoolSize：核心线程数，即线程池中始终保持的线程数。即使这些线程处于空闲状态，也不会被销毁。
2、maximumPoolSize：最大线程数，即线程池允许存在的最大线程数。当队列满了之后，如果再有任务提交，就会根据拒绝策略来处理。
3、keepAliveTime：非核心线程的空闲存活时间，即当线程数超过corePoolSize时，多余的空闲线程可以在终止前保持存活的最长时间。
4、unit：keepAliveTime的时间单位。
5、workQueue：任务队列，用于存放待执行的任务。常见的有ArrayBlockingQueue、LinkedBlockingQueue等。
6、threadFactory：用于创建新线程的工厂，可以通过它来自定义新线程的名称等属性。
7、handler：处理无法执行任务的策略，即当所有核心线程都在执行任务，且队列已满时，再有新任务提交就会触发这个策略

### 线程池拒绝策略
1、

