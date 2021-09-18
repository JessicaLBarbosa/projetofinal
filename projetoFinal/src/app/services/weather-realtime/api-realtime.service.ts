import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRealtimeService {

  private token = 'e1ff3173abe2bc2d65ff669a094da64e';
  private url = 'https://advisor.climatempo.com.br/';

  constructor(
    public httpClient: HttpClient
  ) { }

  public getWeatherRealtime(lon: number, lat: number) {
    const weatherRealtime = `http://apiadvisor.climatempo.com.br/api/v1/climate/temperature/locale/3477?token=${this.token}&lon=${lon}&lat=${lat}`;
    return this.httpClient.get(weatherRealtime);
  }
}
