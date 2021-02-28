import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HandlerService, NewsletterModel } from './services/handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //@Input() searchInput: string;

  title = 'payments-io-site';
  //@Input() searchTerm: string = '';
  allEverySources: any = [];
  email: string = '';
  @Input() NewsletterModel: NewsletterModel = {email : ''};
  isNewsletterSubscriptionSuccessful: boolean = false;

  constructor(public router: Router, public service: HandlerService){}

  ngOnInit(): void {
    this.fetchAllEverySources();
  }

  redirectToHomepage(){
    window.location.href = "/";
  }


  fetchAllEverySources() {
    this.service.getAllEverySources().subscribe(res => {
      this.allEverySources = res;
      //console.log(this.allEverySources);
    })
  }

  searchAnything(){

    //window.alert("You typed " + this.searchInput);

  }

  subscribeToNewsletter(){
    this.service.subscribeEmailToNewsletter(this.email).subscribe(res => {
      this.isNewsletterSubscriptionSuccessful = true;
      this.NewsletterModel.email = '';
      //console.log("Newsletter subscription successful!");
    })
  }




}
