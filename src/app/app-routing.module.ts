import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';

const routes: Routes = [
  { path: '', component: AllServicesComponent },
  { path: 'payments/:_id', component: SingleServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }