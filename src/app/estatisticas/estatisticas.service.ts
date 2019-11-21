import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstatisticasService {

  constructor(private http:HttpClient) { }
  getidf(){
   return this.http.get<any>('http://localhost:3001/get-tf');
  }
  getNomeDocs(){
    return this.http.get<any>('http://localhost:3001/documentos-corpus');

    
  }
}
