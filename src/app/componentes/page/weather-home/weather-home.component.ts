import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  constructor(private weatherService: WeatherService){}

  private readonly destroy$: Subject<void> = new Subject();

  initialName: string = ''
  watherDatas!: WeatherDatas;

  ngOnInit(): void {
    return;
  }

  getWeatherDatas(city_name: string): void{
    this.weatherService.GetWeatherDatas(city_name)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(datas => {
      this.watherDatas = datas;
      this.watherDatas.main.temp = Math.round(this.watherDatas.main.temp - 273) ;
      this.watherDatas.wind.speed = Math.round(this.watherDatas.wind.speed * 3.6);
      console.log(this.watherDatas);
    });
  }

  onSubmit(): void{
    this.getWeatherDatas(this.initialName);
    this.initialName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
