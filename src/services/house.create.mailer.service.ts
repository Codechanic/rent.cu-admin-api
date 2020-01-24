import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { MailerService } from '@nest-modules/mailer';
@Injectable()
export class HouseCreateMailerServiceMiddleware implements NestMiddleware {

  constructor(private readonly mailerService: MailerService) {}
  // tslint:disable-next-line:ban-types
  use(req: Request, res: Response, next: Function) {
    if (res.statusCode === 201) {
      const user = req.user;
      this
        .mailerService
        .sendMail({
          // @ts-ignore
          to: user.username,
          from: 'noreply@nestjs.com',
          subject: 'Usted ha creado una casa  ✔',
          text: 'Usted ha creado una casa',
          html: '<b>Usted ha creado una casa</b>',
        });
      this
        .mailerService
        .sendMail({
          to: 'booking@rent.cu',
          from: 'noreply@nestjs.com',
          subject: 'Usted ha creado una casa  ✔',
          text: 'Usted ha creado una casa',
          html: '<b>Usted ha creado una casa</b>',
        });
    }
    next();
  }
}
