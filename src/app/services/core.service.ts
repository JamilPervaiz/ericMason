import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Entry } from '../models/entry';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private _url: string = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  get(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this._url);
  }
}
