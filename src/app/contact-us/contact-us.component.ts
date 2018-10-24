import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { SendMailService } from '../services/send-mail.service';

import { SendMail } from '../models/send-mail';

import { Message } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [SendMailService, MessageService]
})
export class ContactUsComponent implements OnInit {

  enviarEmail: SendMail = new SendMail();

  msgs: Message[] = [];

  contatoform: FormGroup;

  submitted: boolean;

  constructor(private fb: FormBuilder, private sendMailService: SendMailService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.contatoform = this.fb.group({
      'nome': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'email': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'telefone': new FormControl('', Validators.required),
      'assunto': new FormControl('', Validators.required),
      'mensagem': new FormControl('', [Validators.required, Validators.maxLength(500)])
    });
  }

  sendMail(dadosEmail) {
    this.sendMailService.sendMail(dadosEmail).subscribe(resp => {
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Mensagem enviada com sucesso!' });
    }, err => { this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Falha ao enviar a mensagem. Tente novamente mais tarde!' }); });
  }

}
