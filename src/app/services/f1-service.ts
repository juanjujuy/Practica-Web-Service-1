import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { F1Class } from '../models/f1-class';

@Injectable({
  providedIn: 'root',
})
export class F1Service {

  httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
      'x-rapidapi-key': environment.apiKey
    })
  }

  constructor(private _http: HttpClient) { }

  public getRacesByYear(year: number) {

    return this._http.get<{ results: F1Class[] }>(
      `https://f1-live-motorsport-data.p.rapidapi.com/races/${year}`,
      this.httpOptions
    );
  }

  public getPositionBySession(session: number) {

    return this._http.get<any>(
      `https://f1-live-motorsport-data.p.rapidapi.com/session/${session}`,
      this.httpOptions
    );
  }

  public getConstructoresByYear(year:number) {
    return this._http.get<any> (
      `https://f1-live-motorsport-data.p.rapidapi.com/constructors/standings/${year}`, this.httpOptions
    );
  }
}
