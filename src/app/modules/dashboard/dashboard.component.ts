import { Component } from '@angular/core';
import { ActivityComponent } from '../../components/classes/activity.component';
import { WeatherFrameComponent } from '../../components/classes/weatherFrame.component';
import { OptionBarComponent } from '../../components/classes/optionBar.component';
import { WeatherService } from '../../services/weather.service';
import { Store, select} from '@ngrx/store';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.template.html',
    //styleUrls: ['../../css/pod.css']
})

export class DashboardComponent {

    title = 'dashboard component';
    public cityName;
    public option;
    private theWeatherService;
    public dayWeather = {};
    public fiveDaysWeather = [];
    constructor(private weatherService:WeatherService, private store: Store<string>){
        this.theWeatherService = weatherService;
        store.pipe(select('search')).subscribe((city:string) => { 
            this.cityName = city;
            this.getForecastData();
        });

        store.pipe(select('options')).subscribe((option:string) => { 
            this.option = option;
            console.log(this.option);
            this.getForecastData();
        });
    }

    getForecastData () {
        console.log(this.option);
        if (this.option == 'today') {
            this.theWeatherService.getWeatherByCityName(this.cityName).subscribe(
                (res:any) => {
                    console.log(res);
                    let obj: any = {};
                    obj.description = res.weather[0].description;
                    obj.humidity = res.main.humidity;
                    obj.pressure = res.main.pressure;
                    obj.temp = res.main.temp ;
                    obj.city = res.name;
                    this.dayWeather = obj;
                },
                (error) => {
    
                }
            );
        } else if (this.option == 'fiveDays') {
            this.theWeatherService.get5daysWeatherByCityName(this.cityName).subscribe(
                (res:any) => {
                    console.log(res);
                    // let obj: any = {};
                    // obj.description = res.weather[0].description;
                    // obj.humidity = res.main.humidity;
                    // obj.pressure = res.main.pressure;
                    // obj.temp = res.main.temp ;
                    // obj.city = res.city.name;
                    let self = this;
                    self.fiveDaysWeather = [];
                    res.list.forEach(function (value) {
                        let obj: any = {};
                        obj.description = value.weather[0].description;
                        obj.humidity = value.main.humidity;
                        obj.pressure = value.main.pressure;
                        obj.temp = value.main.temp ;
                        obj.city = res.city.name;
                        // console.log(obj);
                        
                        self.fiveDaysWeather.push(obj);
                    });
                   // console.log(this.fiveDaysWeather);
                },
                (error) => {
    
                }
            );
        } else  if (this.option == 'twoWeeks') {
            this.theWeatherService.get16daysWeatherByCityName(this.cityName).subscribe(
                (res:any) => {
                    console.log(res);
                },
                (error) => {
    
                }
            );
        }
    }
}