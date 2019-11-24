import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WiredButton, WiredInput } from "wired-elements";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginaOpcoesComponent } from './pagina-opcoes/pagina-opcoes.component';
import { OpcaoComponent } from './pagina-opcoes/opcao/opcao.component';
import { ListarCorpusDocumentosComponent } from './listar-corpus-documentos/listar-corpus-documentos.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { ConsultasComponent } from './consultas/consultas.component'
import { HttpClientModule } from '@angular/common/http';
import { EstatisticasCategoriasComponent } from './estatisticas-categorias/estatisticas-categorias.component';


@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PaginaOpcoesComponent,
    OpcaoComponent,
    ListarCorpusDocumentosComponent,
    EstatisticasComponent,
    ConsultasComponent,
    EstatisticasCategoriasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
