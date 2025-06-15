import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from './configs/dotenv';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     forbidNonWhitelisted: true,
  //     transform: true,
  //   }),
  // );

  await app.listen(dotenv.PORT || 9000);
}
bootstrap();
