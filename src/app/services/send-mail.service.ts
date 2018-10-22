import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendMail } from '../models/send-mail';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient) {
  }

  sendMail(SendMail: SendMail) {
    return this.http.post('http://drleonardobotelho-env.xmmuwmkfzs.sa-east-1.elasticbeanstalk.com/api/enviarEmail', SendMail);
  }
}
