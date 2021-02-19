import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllServicesComponent,
    SingleServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
