import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    this.http.get(env.weatherApiUrl, {
      headers: new HttpHeaders()
        .set(env.XRapidAPIHostHeader, env.XRapidAPIHost)
        .set(env.XRapidAPIKeyHeader, env.XRapidAPIKey),
      params: new HttpParams()
        .set('url', cityName)
    })
  }
}


