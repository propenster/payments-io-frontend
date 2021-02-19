import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HandlerService } from 'src/app/services/handler.service';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.css']
})
export class SingleServiceComponent implements OnInit {

  id = this.actRoute.snapshot.params['_id'];
  Source: any = {};
  otherRelatedSources: any = [];
  page: number = 1;
  limit: number = 2;

  constructor(private service: HandlerService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fetchSingleService();
    this.fetchOtherRelatedSources();
  }
  fetchSingleService() {
    this.service.getSingleService(this.id).subscribe(res =>{
      this.Source = res;
      console.log(this.Source);
    })
  }

  fetchOtherRelatedSources() {
    this.service.getAllSources(this.page++, this.limit).subscribe(res => {
      this.otherRelatedSources = res;
      console.log(this.otherRelatedSources);
    })
  }

  navigateByUrl(_id){
    this.router.navigateByUrl('/payments/{{_id}}');
  }


  loadMoreSources(){
    this.service.getAllSources(this.page++, this.limit).subscribe(res => {
      this.otherRelatedSources = res;
      console.log(this.otherRelatedSources);
    })
  }

}
