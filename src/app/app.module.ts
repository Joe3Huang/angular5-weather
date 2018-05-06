import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NavbarComponent } from './components/classes/navbar.component';
import { StoreModule } from '@ngrx/store';
import { searchReducer } from './ngrx/search.reducer';
import { FormsModule } from '@angular/forms';
import { optionsReducer } from './ngrx/options.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FormsModule,
    StoreModule.forRoot({ search: searchReducer, options : optionsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 5,
      monitor: searchReducer
    })
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

declare module '@ngrx/store' {
  interface Action {
    type: string;
    payload?: any;
  }
}