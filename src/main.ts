import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

/**
 * Bootstrapping of the NestJS application
 */
async function bootstrap() {

  /* create the nestjs app */
  const app = await NestFactory.create(AppModule);

  /* setup swagger api documentation */
  const options = new DocumentBuilder()
    .setTitle('RENT.CU API DOC')
    .setDescription('Documentation for the rent.cu api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  /* enable communication between different domains */
  app.enableCors();

  /* start the expressjs server on port 3000 */
  await app.listen(3000);
}

bootstrap().then(() => console.log('Server started.')).catch((error) => console.log(error));
