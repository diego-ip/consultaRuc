import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleador } from '../empleador';

@Injectable({
  providedIn: 'root'
})
export class EmpleadorService {

  constructor(private http: HttpClient) {
  }

  getEmpleadores():Observable<Empleador[]> {
    return this.http.get<Empleador[]>('assets/mock-data/empleadores.json');
  }
}
