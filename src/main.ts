import 'dotenv/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';

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

  // eslint-disable-next-line no-console
  console.log(`Api is running on: ${ await app.getUrl() }`);
};

// eslint-disable-next-line no-console
bootstrap().catch(console.error);
