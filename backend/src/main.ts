import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for Next.js
  await app.listen(process.env.PORT ?? 4001); // Backend running on 4001
}
bootstrap();
