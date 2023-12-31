import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICoffee } from '../interfaces/coffee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private URL_API: string = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

  constructor(private _http: HttpClient) { }

  getCoffees(): Observable<ICoffee[]> {
    return this._http.get<ICoffee[]>(this.URL_API);
  }
}
