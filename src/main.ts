import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";


async function start(){
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Hard backend lesson')
        .setDescription('REST API documentation')
        .setVersion('1.0.0')
        .addTag('R00TUSER')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)
//    app.useGlobalGuards(JwtAuthGuard)     Global Authorization

    await app.listen(PORT, () => console.log(`Server startes on PORT ${PORT}`))
}

start();