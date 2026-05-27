import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'low-carb-recipes.p.rapidapi.com',
      'x-rapidapi-key': environment.apiKey,
    })
  }

  httpOptions2 = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
      'x-rapidapi-key': environment.apiKey,
    })
  }

  constructor(private _http: HttpClient) { }

  public getRecipe(name: string): Observable<any> {

    return this._http.get(`https://low-carb-recipes.p.rapidapi.com/search?name=${name}&limit=3`, this.httpOptions)

  }

  public traducirTexto(texto: string): Observable<any> {
    const body = {
      "q": texto,
      "source": "en",
      "target": "es"
    }
    return this._http.post(`https://deep-translate1.p.rapidapi.com/language/translate/v2`,body,this.httpOptions2)
  }
}
