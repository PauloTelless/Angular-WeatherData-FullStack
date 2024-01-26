import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas.interface';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherDatas

}
