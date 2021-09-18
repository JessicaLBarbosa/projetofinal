import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMoredaysService {

  private token = 'e1ff3173abe2bc2d65ff669a094da64e';
  private url = 'https://advisor.climatempo.com.br/';

  constructor(
    public httpClient: HttpClient
  ) { }

  public getWeatherMoreDays(lon: number, lat: number) {
    const weatherMoreDays = `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token=${this.token}&lon=${lon}&lat=${lat}`;
    return this.httpClient.get(weatherMoreDays);
  }
}
