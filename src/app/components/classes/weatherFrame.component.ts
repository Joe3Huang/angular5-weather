import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Store, select} from '@ngrx/store';
import { SET, RESET } from './../../ngrx/search.reducer';
@Component({
    selector: 'weatherFrame',
    templateUrl: '../views/weatherFrame.template.html',
    // styleUrls: ['../../styles/global.scss']
})

export class WeatherFrameComponent {

    title = 'activity component';
    public weatherState : string = 'clear';
    public weatherImgPath : string;
    public weatherStateOptions : Array<string> = [];
    public weatherDataObj = {};
    public city : string;
    public cityName : string;

    public description ;
    public humidity ;
    public pressure ;
    public temp ;


    constructor(private weatherService:WeatherService, private store: Store<string>){

        store.pipe(select('search')).subscribe((city:string) => { 
            this.cityName = city;
            console.log(this.cityName);
            weatherService.getWeatherByCityName(this.cityName).subscribe(
                (res:any) => {
                    console.log(res);
                    this.weatherDataObj = res;
                    this.weatherState  = this.getWeatherState(res.weather[0].description);
                    this.weatherImgPath = "assets/img/weather-" + this.weatherState + ".png";


                    this.description = res.weather[0].description;
                    this.humidity = res.main.humidity;
                    this.pressure = res.main.pressure;
                    this.temp = res.main.temp ;

                    this.city = res.name;
                    console.log(this.city);
                },
                (error) => {
    
                }
            );
        });

        // weatherService.getWeatherByCityName('ChristChurch').subscribe(
        //     (res) => {
        //         console.log(res);
        //         this.weatherDataObj = res;
        //         this.weatherState  = this.getWeatherState(res.weather[0].description);
        //         this.weatherImgPath = "assets/img/weather-" + this.weatherState + ".png";
        //         this.city = res.name;
        //         console.log(this.city);
        //     },
        //     (error) => {

        //     }
        // );
    }

    getWeatherState(input:string){
        if(input.indexOf('clear') >= 0){
            return 'clear';
        }
        if(input.indexOf('clouds') >= 0){
            return 'cloud';
        }
        if(input.indexOf('rain') >= 0){
            return 'rain';
        } 
    }
}