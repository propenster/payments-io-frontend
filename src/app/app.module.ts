import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CreateResourceComponent } from './components/create-resource/create-resource.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllServicesComponent,
    SingleServiceComponent,
    ContactUsComponent,
    FooterComponent,
    CreateResourceComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
