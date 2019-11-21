import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstatisticasService {

  constructor(private http:HttpClient) { }
  getidf(arquivo:string){
   return this.http.post<any>('http://localhost:3001/get-tf',{data:arquivo});
  }
  getNomeDocs(){
    return this.http.get<any>('http://localhost:3001/documentos-corpus');
  }
}
