import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaOpcoesComponent } from './pagina-opcoes/pagina-opcoes.component';
import { ListarCorpusDocumentosComponent } from './listar-corpus-documentos/listar-corpus-documentos.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { ConsultasComponent } from './consultas/consultas.component';


const routes: Routes = [


  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'pagina-opcoes',
    component:PaginaOpcoesComponent
  },

  {
    path:'pagina-opcoes/listar-documentos',
    component:ListarCorpusDocumentosComponent
  },

  {
    path:'pagina-opcoes/estatisticas',
    component:EstatisticasComponent
  },{
    path:'pagina-opcoes/consultas',
    component:ConsultasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
