import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const swaggerSetup = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('AutoApp')
    .setDescription('The AutoApp API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
};
