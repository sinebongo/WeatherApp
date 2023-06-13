import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService : WeatherService){
  }

  weatherData: weatherData = {
    cloud_pct: 0,
    temp: 0,
    feels_like: 0,
    humidity: 0,
    min_temp: 0,
    max_temp: 0,
    wind_speed: 0,
    wind_degrees: 0,
    sunrise: 0,
    sunset: 0
  };

  title = 'WeatherApp';
  city : string =''


  ngOnInit(): void {
  this.weatherService.getWeatherData(this.city = 'Krugersdorp')
  .subscribe(res=>
    this.weatherData = res
    )

  }

  searchValEntered(searchTerm: string) {
    this.city = searchTerm;
    this.weatherService.getWeatherData(this.city)
      .subscribe(res =>
        this.weatherData = res
      )
  }



}
