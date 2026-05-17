import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeoService {

  httpOptions = {
    headers: new HttpHeaders({
      'X-RapidApi-Host': 'country-state-city-search-rest-api.p.rapidapi.com',
      'X-RapidApi-Key': environment.apiKey,
    })
  }
  constructor(private _http: HttpClient) { }

  //Peticion por GET a url de la api REST de countries y States
  public getCountries(): Observable<any> {

    return this._http.get("https://country-state-city-search-rest-api.p.rapidapi.com/allcountries", this.httpOptions);
  }

  public getStatesByCountry(country: string): Observable<any> {
    return this._http.get('https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode?countrycode=' + country, this.httpOptions);
  }

}
