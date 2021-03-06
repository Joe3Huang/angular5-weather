
import {Injectable} from '@angular/core'; 
import { GetDataService } from '../services/getData.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

    private api = 'api.openweathermap.org/data/2.5/weather?q=';
    private fiveDaysApi = 'api.openweathermap.org/data/2.5/forecast?q=';
    private sixteenDays = 'api.openweathermap.org/data/2.5/forecast/daily?q=';
    private appid = '&APPID=c6e638ebe457bcd091fdf5edc1a5b87c';

    constructor(
        private http:Http
        ) {

    }    
 
    getWeatherByCityName(cityName : string) {
        
        let url = 'https://' + this.api + cityName + this.appid;
        console.log(url);
        return this.http.get(url)//, options)
                .map((res:Response) => {return res.json()})
    }
   
    get5daysWeatherByCityName(cityName : string) {
        
        let url = 'https://' + this.fiveDaysApi + cityName + this.appid;
        console.log(url);
        return this.http.get(url)//, options)
                .map((res:Response) => {return res.json()})
    }

    get16daysWeatherByCityName(cityName : string) {
        
        let url = 'https://' + this.sixteenDays + cityName + this.appid;
        console.log(url);
        return this.http.get(url)//, options)
                .map((res:Response) => {return res.json()})
    }     
}
