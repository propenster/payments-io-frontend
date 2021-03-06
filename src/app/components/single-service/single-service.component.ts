import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HandlerService } from 'src/app/services/handler.service';

import * as xml2js from 'xml2js';


const alexaHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/xml',
    'x-api-key': 'LrUFSZ7OpY63Agsf8kHU66HzEx1lkiAT976gst98',
    'Accept': 'text/xml'

  })
}
@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.css']
})
export class SingleServiceComponent implements OnInit {

  id = this.actRoute.snapshot.params['_id'];
  slug = this.actRoute.snapshot.params['slug'];

  //slug = this.actRoute.snapshot.params.slug;
  Source: any = {};
  otherRelatedSources: any = [];
  page: number = 1;
  limit: number = 2;
  siteRank: string = '';
  myHtml: any;
  result: string;
  category: string = 'Digital Payments';
  subcategories: string[] = ['payments ', 'digital payments ', 'cards ', ''];


  constructor(private service: HandlerService,      private sanitizer: DomSanitizer, private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fetchSingleServiceBySlug()
    //this.fetchSingleService();
    this.fetchOtherRelatedSources();
    //this.fetchSiteRank();


    //console.log(this.actRoute.snapshot.params);
  }

  // fetchSingleServiceBySlug(){
  //   this.service.getAllEverySources().subscribe(res => {
  //     res['name'].toLowerCase() === this.slug.toLowerCase();
  //     this.Source = res;
  //     console.log("Slugified one " + this.Source);
  //   })
  // }

   fetchSiteRank(url){
    const source = this.Source;

    const headers = new HttpHeaders({ 'Content-Type': 'text/xml',
    'x-api-key': 'LrUFSZ7OpY63Agsf8kHU66HzEx1lkiAT976gst98',
    'Accept': 'text/xml' });

    this.http.get<any>(`/api?Output=json&Action=UrlInfo&Count=10&ResponseGroup=Rank,LinksInCount&Start=1&Url=${url}`, { headers: headers }).subscribe(res => {
      this.siteRank = res['Awis']['Results']['Result']['Alexa']['TrafficData']['Rank'];
      console.log("This is the Result " + JSON.stringify(this.siteRank));
    })

   }







   //https://awis.api.alexa.com/api?Action=UrlInfo&Count=10&ResponseGroup=Rank,LinksInCount&Start=1&Url=


  fetchSingleService() {
    this.service.getSingleService(this.id).subscribe(res =>{
      this.Source = res;
      this.fetchSiteRank(this.Source.url);

      //console.log(this.Source);
    })
  }

  fetchSingleServiceBySlug(){
    this.service.getSingleServiceBySlug(this.slug).subscribe(res => {
      this.Source = res;
      this.fetchSiteRank(this.Source.url);
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

  gotoUrl(slug: string){
    //window.location.reload();
    window.location.href = "/payments/platforms/" + slug;
    //this.router.navigate(['/payments/' + id]);

  }

}
