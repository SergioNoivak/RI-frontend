import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) { }


  fazerConsulta(query:any){
    return this.http.post<any>('http://localhost:3001/fazer-consulta',{data:query});
   }


}
