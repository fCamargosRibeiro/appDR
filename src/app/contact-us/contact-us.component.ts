import { Component, OnInit } from '@angular/core';

import { SendMailService } from '../../app/services/send-mail.service';

import { SendMail } from '../models/send-mail';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [SendMailService]
})
export class ContactUsComponent implements OnInit {

  enviarEmail: SendMail = new SendMail();

  msgs: Message[] = [];

  constructor(private sendMailService: SendMailService) {

  }

  ngOnInit() {
  }

  sendMail() {
    this.sendMailService.sendMail(this.enviarEmail).subscribe(resp => {
      this.showSuccess();
    });
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Successo', detail: 'E-mail enviado com sucesso!' });
  }

}
