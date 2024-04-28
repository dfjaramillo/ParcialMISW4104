import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from '../models/planta';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
