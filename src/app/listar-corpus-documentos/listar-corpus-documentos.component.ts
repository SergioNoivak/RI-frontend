import { Component, OnInit } from '@angular/core';
import { ListarCorpusDocumentosService } from './listar-corpus-documentos.service';

@Component({
  selector: 'app-listar-corpus-documentos',
  templateUrl: './listar-corpus-documentos.component.html',
  styleUrls: ['./listar-corpus-documentos.component.scss']
})
export class ListarCorpusDocumentosComponent implements OnInit {


  nomesDocumentos = [];
  carregando = {

  }
  constructor(private service:ListarCorpusDocumentosService) {
    this.service.getAllDocumentsName().subscribe(dados=>{
      this.nomesDocumentos = dados['data']
      for (let i = 0; i < this.nomesDocumentos.length; i++) 
          this.carregando[this.nomesDocumentos[i]] = false;
      
      console.log(this.nomesDocumentos)
    })
   }

  ngOnInit() {
  
  }

  avaliar(){
    for(let chave in this.carregando){
      if(this.carregando[chave]!=undefined){

        this.carregando[chave] = true;
 
    }
  }
    this.service.enviarAvaliacao(this.nomesDocumentos).subscribe(dados=>{
      console.log(dados);
      
  })

}
}
