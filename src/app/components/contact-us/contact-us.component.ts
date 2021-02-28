import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HandlerService } from 'src/app/services/handler.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

@Input() contactForm: any = {fullname: '', email: '', subject: '', message: ''};
@Input() responseAlert: '';

  constructor(public service: HandlerService, private http: HttpClient) {

   }

  ngOnInit(): void {
  }

  sendContactEmail(){
    this.service.sendContactEmail(this.contactForm).subscribe((res: {})=>{
      this.responseAlert = res['message'];

      //console.log(this.responseAlert);
      alert(res['message']);
      this.contactForm = {fullname: '', email: '', subject: '', message: ''};
    })
  }

}
