import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PredictAge } from '../interfaces/predictAge.interface';

@Injectable({
  providedIn: 'root'
})
export class PredictAgeService {

  private urlBase: string = "https://api.agify.io";

  constructor(private http: HttpClient) { }

  getAgeByName(name: string): Observable<PredictAge>{
    return this.http.get<PredictAge>(`${this.urlBase}/?name=${name}`);
  }
}
