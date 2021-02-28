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
  //slug = this.actRoute.snapshot.params.slug;
  Source: any = {};
  otherRelatedSources: any = [];
  page: number = 1;
  limit: number = 2;

  constructor(private service: HandlerService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.fetchSingleServiceBySlug();
    this.fetchSingleService();
    this.fetchOtherRelatedSources();
    //console.log(this.actRoute.snapshot.params);
  }

  // fetchSingleServiceBySlug(){
  //   this.service.getAllEverySources().subscribe(res => {
  //     res['name'].toLowerCase() === this.slug.toLowerCase();
  //     this.Source = res;
  //     console.log("Slugified one " + this.Source);
  //   })
  // }



  fetchSingleService() {
    this.service.getSingleService(this.id).subscribe(res =>{
      this.Source = res;
      //console.log(this.Source);
    })
  }

  fetchOtherRelatedSources() {
    this.service.getAllEverySources().subscribe(res => {
      this.otherRelatedSources = res;
      this.otherRelatedSources = this.otherRelatedSources.filter(x => x.name.toLowerCase().includes(this.Source.name.toLowerCase()));
      //console.log(this.otherRelatedSources);
    })
  }

  navigateByUrl(_id){
    this.router.navigateByUrl('/payments/{{_id}}');
  }


  loadMoreSources(){
    this.service.getAllSources(this.page++, this.limit).subscribe(res => {
      this.otherRelatedSources = res;
      //console.log(this.otherRelatedSources);
    })
  }

  gotoUrl(id: string){
    //window.location.reload();
    window.location.href = "/payments/"+id;
    //this.router.navigate(['/payments/' + id]);

  }

}
