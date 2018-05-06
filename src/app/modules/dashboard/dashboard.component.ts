import { Component } from '@angular/core';
import { ActivityComponent } from '../../components/classes/activity.component';
import { WeatherFrameComponent } from '../../components/classes/weatherFrame.component';
import { OptionBarComponent } from '../../components/classes/optionBar.component';
@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.template.html',
    //styleUrls: ['../../css/pod.css']
})

export class DashboardComponent {

    title = 'dashboard component';
}