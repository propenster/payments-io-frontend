import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreateResourceComponent } from './components/create-resource/create-resource.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';

const routes: Routes = [
  { path: '', component: AllServicesComponent },
  { path: 'payments', component: AllServicesComponent },
  { path: 'payments/:_id', component: SingleServiceComponent },
  //{ path: 'payments/providers/:slug', component: SingleServiceComponent },
  { path: 'contact-us', component: ContactUsComponent },
  //{ path: 'resources/create', component: CreateResourceComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
