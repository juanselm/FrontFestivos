import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {

  private url:string;

   constructor(private http: HttpClient) {
    this.url = `${enviroment.urlBase}festivos/`;
   }

   public getHolidays(year: number): Observable<any>{
    return this.http.get<any>(`${this.url}listar?fecha=01/01/${year}`);
   }

   public checkHolidays(date: string): Observable<any>{
    return this.http.get<any>(`${this.url}check?fecha=${date}`);
   }
}
