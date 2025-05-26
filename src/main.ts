import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module"
// import { loggerFunction } from "./middleware/logger.function.middleware"

function getMiddleware(val) {
    return (req, res, next) => {
        console.log(val, "val")
        next()
    }
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    // 这样就是注册了全局中间件，可以绑定到每个注册的路由上
    // app.use(loggerFunction)

    app.use((req, res, next) => {
        console.log("全局中间件")
        next()
    })

    app.use(getMiddleware("123"))
    await app.listen(8989)
}
bootstrap()