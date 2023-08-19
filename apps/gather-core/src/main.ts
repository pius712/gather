import { NestFactory } from '@nestjs/core';
import { GatherCoreModule } from './gather-core.module';

async function bootstrap() {
  const app = await NestFactory.create(GatherCoreModule);
  await app.listen(3000);
}
bootstrap();
