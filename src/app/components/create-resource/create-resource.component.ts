import { Component, Input, OnInit } from '@angular/core';
import { HandlerService } from 'src/app/services/handler.service';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.css']
})
export class CreateResourceComponent implements OnInit {

  @Input() ResourceRequestForm: any = { requesterName: '', requesterEmail: '', name: '', description: '', webUrl: '', docUrl: '', imageUrl: '' };
  isResourceRequestSubmittedSuccessfully: boolean = false;
  constructor(private service: HandlerService) { }

  ngOnInit(): void {

  }

  createResourceRequest(){
    this.service.createResourceRequest(this.ResourceRequestForm).subscribe(res => {
      this.isResourceRequestSubmittedSuccessfully = true;
      //console.log("Resource Request Created Successfully! We will review and get back to you.");
      this.ResourceRequestForm = { requesterName: '', requesterEmail: '', name: '', description: '', webUrl: '', docUrl: '', imageUrl: '' };

    })
  }

}
