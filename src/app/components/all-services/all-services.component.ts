import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HandlerService } from 'src/app/services/handler.service';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {

  Sources: any = [];

  constructor(public service: HandlerService, public router: Router) { }

  ngOnInit(): void {
    this.fetchAllSources();
  }
  fetchAllSources() {
    this.service.getAllSources().subscribe(res => {
      this.Sources = res;
      console.log(this.Sources);
    })
  }

  navigateByUrl(_id){
    this.router.navigateByUrl('/payments/{{_id}}');
  }



}
