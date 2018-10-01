import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RequestBloodComponent } from './request-blood/requestblood.component';
import { AddBloodComponent } from './add-blood/addblood.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: AddBloodComponent },
  { path: 'addBlood', component: AddBloodComponent },
  { path: 'requestBlood', component: RequestBloodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
