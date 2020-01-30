import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class NotificationService {
  constructor(private readonly mailerService: MailerService) {

  }

  onHouseCreation(user: any) {
    this
      .mailerService
      .sendMail({
        // @ts-ignore
        to: user.username,
        from: 'booking@rent.cu',
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

  onHouseUpdate() {
    this.mailerService.sendMail({
      to: 'booking@rent.cu',
      from: 'booking@rent.cu',
      subject: 'Se ha actualizado la casa  ✔',
      text: 'Se ha actualizado la casa',
      html: '<b>Se ha actualizado la casa</b>',
    });
  }
}
