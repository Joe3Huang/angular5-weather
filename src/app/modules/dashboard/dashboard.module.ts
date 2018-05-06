import { NgModule }               from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ActivityComponent } from '../../components/classes/activity.component';
import { OptionBarComponent } from '../../components/classes/optionBar.component';
import { WeatherService } from '../../services/weather.service';
import { HttpModule } from '@angular/http';
import { WeatherFrameComponent } from '../../components/classes/weatherFrame.component';
import { PipesLibrary } from '../../pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes =  [
  { path: 'dashboard',  component: DashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpModule,
    PipesLibrary,
    BrowserModule
  ],
  providers: [
    WeatherService
],
  declarations: [ DashboardComponent, ActivityComponent, WeatherFrameComponent, OptionBarComponent],
})

export class DashboardModule { }
