- 中间件
- 在路由处理器之前来调用函数
- 中间件函数
- 默认情况下：express中间件等同于nestjs中间件
    - 执行任何代码
    - 对请求和相应修改
    - 结束请求-相应周期
    - 调用堆栈之中的下一个中间件函数
    - 如果当前中间件函数未结束相应周期-则必须调用next将控制权传递给下一个中间件函数

- 通过函数
- 带有 @Injectable() 装饰器的类来实现自定义 Nest 中间件。类应该实现 NestMiddleware 接口，而函数没有任何特殊要求
- 添加 @Injectable() 就是能够依赖注入的
- 依赖注入就需要加入 @Injectable()，否则其实不加也是也可以的
- middleware之中使用的全局的依赖项是全局的providers嘛？
    - 先找模块内&再找全局的哈

- 路由通配符
    - forRoutes({ Spath: "ab*cd", method: RequestMethod.ALL })

- 排除路由
    - 有时候我们想要排除某些路由不应用中间件，我们可以使用exclude方法清空排除某些路由，此方法可以接受
    - 单个字符串，多个字符串，或者是标识要排除路由的RouteInfo对象
```javascript
consumer
    .apply(LoggerMiddleware)
    .exclude(
        {path: 'cats', method: RequestMethod.GET},
        {path: "cats", method: RequestMethod.POST},
        'cats/(.*)'
    )
    .forRoutes(CatsController)


```