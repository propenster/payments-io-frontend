import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //@Input() searchInput: string;

  title = 'payments-io-site';

  searchAnything(){

    //window.alert("You typed " + this.searchInput);

  }


}
