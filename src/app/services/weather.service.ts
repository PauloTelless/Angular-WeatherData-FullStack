import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService{
  private API_KEY: string = 'e1d46f324e963f3d1654a81751c807cf';

  constructor(private HttpClient: HttpClient) {  }

  GetWeatherDatas(city_name: string): Observable<any>{
    return this.HttpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${this.API_KEY}`)
    };
}

