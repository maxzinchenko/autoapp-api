import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

const bootstrap = async (port: string | number = 3000): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Autoapp')
    .setDescription('The Autoapp API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('api/v1');
  await app.listen(port);

  // eslint-disable-next-line no-console
  console.log(`Api is running on: ${ await app.getUrl() }`);
};

// eslint-disable-next-line no-console
bootstrap().catch(console.error);
