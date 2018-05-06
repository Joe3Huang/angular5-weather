import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
     // { path: '', component: AppComponent},
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ])
  ],
  exports: [ RouterModule ] // re-export the module declarations
})
export class AppRoutingModule { };