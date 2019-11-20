import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListarCorpusDocumentosService {

  constructor(private http:HttpClient) { }
  getAllDocumentsName(){
   return this.http.get<any>('http://localhost:3001/documentos-corpus');



  }


  enviarAvaliacao(documentos:any){


   return this.http.post<any>('http://localhost:3001/avaliar-documento',{"documentos":documentos});

  }


}
