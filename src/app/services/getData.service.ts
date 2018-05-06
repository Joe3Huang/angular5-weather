// CLASSES
import {Injectable} from '@angular/core'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GetDataService {

    constructor(protected http:Http) {

    } 

    getData(api:string, data:any, httpMethod:string, format?:string) {
      //  console.log(token);
        let path = '';//API_URL;
        let tempData = {};
        let sendData = {}; 
        let body = {};
        let headerDataFormat = '';
        let contentLength = 0;
        switch (httpMethod) {
            case "POST":
            case "PUT":
                if(typeof(data) == 'object') {
                    tempData = data;
                    contentLength = this.size(data)
                }
                else {
                    tempData[data] = data;
                }  
                body = JSON.stringify(tempData);
                break;
            case "GET":
            case "DELETE":
                let qString = this.httpBuildQuery(data, '');

              //  console.log(path);
                break;
            default:
                break;
        }  

        switch (format) {
            case 'json':
                headerDataFormat = 'application/json';
                break;

            case 'file':
                headerDataFormat = 'application/octet-stream';
                break;

            case 'xml':
                headerDataFormat = 'application/xml';
                break;   

            case 'urlencoded':
                headerDataFormat = 'application/x-www-form-urlencoded';
                break;      

            default:
                headerDataFormat = 'application/x-www-form-urlencoded';
                break;
        }

        let headers = new Headers({ 
           // 'Authorization': 'bearer ' + token,
            'Content-Type': headerDataFormat,
          //  'User-Agent' :  'BasePlateOAuth'
          //  'Content-Length' : contentLength,

        });
 

        // let options = new RequestOptions({ headers: headers });
        // if(httpMethod == 'GET'){  
        //     return this.http.get(path, options)
        //         .map((res:Response) => {console.log(res); return res.json()})
        //         //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        // } else if(httpMethod == 'POST'){
        //     return this.http.post(path, body, options)
        //         .map((res:Response) => { return res.json();}) 
        // } else if(httpMethod == 'PUT'){
        //     return this.http.put(path, body, options)
        //         .map((res:Response) => {return res.json();})
        // } else if(httpMethod == 'DELETE'){
        //     return this.http.delete(path, options)
        //         .map((res:Response) => { return res.json();}) 
        // } else {
        //     console.log('httpMethod error');
        // }
    }

    httpBuildQuery(obj, prefix) {
        var str = [], p;
        for(p in obj) {
            if (obj.hasOwnProperty(p)) {
            var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
            str.push((v !== null && typeof v === "object") ? this.httpBuildQuery(v, k) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    }

    size(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
}  