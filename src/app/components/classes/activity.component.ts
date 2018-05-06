import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
    selector: 'activity',
    templateUrl: '../views/activity.template.html',
    //styleUrls: ['../../css/pod.css']
})

export class ActivityComponent {

    title = 'activity component';
    constructor(private weatherService:WeatherService){
        weatherService.getWeatherByCityName('Christchurch').subscribe((res) => {
            console.log(res);
        });
    }


}