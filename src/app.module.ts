import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
// // import { LoggerService } from "./logger.service"
// // import { LoggerModule } from "./logger.module"
// // import { CoreModule } from "./core.module"
// import { CommonModule } from "./common.module"
// import { OtherModule } from "./other.module"
// // import { Common2Module } from "./common2.module"
import { LoggerMiddleware } from "./middleware/logger.middleware"
// import { DynamicConfigModule } from "./dynamicConfig.module"
import { loggerFunction } from "./middleware/logger.function.middleware"

@Module({
    controllers: [AppController],
    providers:[
        AppService,
    ],
    // providers: [
    //     AppService,
    //     {
    //         provide: "logger",
    //         useValue: new LoggerService()
    //     }
    // ],
    imports: [
        // LoggerModule
        // CoreModule,
        // CoreModule,
       
        // Common2Module,
        // CommonModule,
        // OtherModule,
        // 动态模块需要调用forRoot方法
        // 需要让import来支持动态模块
        // 这块是可以传参数的
        // DynamicConfigModule.forRoot("params")
    ],
    exports: [
        // AppService
    ]
})
// export class AppModule {}
export class AppModule implements NestModule {


    // // 在这块写就可以依赖注入，在外面写的时候是无法依赖注入的
    // MiddlewareConsumer就是当前得NestApplication的实例
    configure(consumer: MiddlewareConsumer) {
        consumer
            // .apply(LoggerMiddleware)
            // .apply(loggerFunction)
            // .forRoutes({
            //     path: '*',
            //     method: RequestMethod.ALL
            // }) 
    //         // .forRoutes("*");
    //         // 针对/config来应用中间件
    //         // 前面得第一个/可以省略
    //         // .forRoutes('config')
    //         // .forRoutes({ path: 'config', method: RequestMethod.GET })
    //         // * 代表匹配任意字符的
    //         // 这个是express已经处理好了，不需要我们在处理了
    //         // .forRoutes({ path: 'ab*de', method: RequestMethod.ALL })


            
    //         .exclude(
    //             // { path: "cats", method: RequestMethod.GET},
    //             // { path: "cats", method: RequestMethod.POST},
    //             { path: "/app/module", method: RequestMethod.GET}
    //         )

    //         .forRoutes(
    //             AppController
    //         )
            
    }
}
