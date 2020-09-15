import 'dotenv/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { swaggerSetup } from './swagger';
import { AppModule } from './app.module';
import { ExceptionsFilter } from './exceptions.filter';

const bootstrap = async (port: string | number = 3000): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  swaggerSetup(app);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionsFilter(httpAdapter));

  await app.listen(port);

  Logger.log(`Server is running on: ${ await app.getUrl() }`, 'NestApplication');
};

bootstrap().catch(Logger.error);
