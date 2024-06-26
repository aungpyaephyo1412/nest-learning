import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: process.env.FRONTEND_URL, // Add your frontend URL here
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  //   allowedHeaders: [
  //     'Origin',
  //     'X-Requested-With',
  //     'Content-Type',
  //     'Accept',
  //     'Authorization',
  //   ],
  // });
  const config = new DocumentBuilder()
    .setTitle('Nest Test')
    .setDescription('')
    .setVersion('1.0')
    // .addTag('nest-test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  await app.listen(3000);
}
bootstrap().then(() => {
  console.log('Server is listening on port 3000');
});
