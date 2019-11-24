import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstatisticasCategoriasService {

  constructor(private http:HttpClient) {


  }

  buscarEstatisticasCategoria(){

    return this.http.get<any>('http://localhost:3001/estatisticas-categorias');


  }

}
