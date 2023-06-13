import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { weatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    return this.http.get<weatherData>(env.weatherApiUrl, {
      headers: new HttpHeaders()
        .set(env.XRapidAPIHostHeader, env.XRapidAPIHost)
        .set(env.XRapidAPIKeyHeader, env.XRapidAPIKey),
      params: new HttpParams()
        .set('city', cityName)
    })
  }
}


