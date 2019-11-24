import { Component, OnInit } from '@angular/core';
import * as roughViz from 'rough-viz'
import { EstatisticasCategoriasService } from './estatisticas-categorias.service';

@Component({
  selector: 'app-estatisticas-categorias',
  templateUrl: './estatisticas-categorias.component.html',
  styleUrls: ['./estatisticas-categorias.component.scss']
})
export class EstatisticasCategoriasComponent implements OnInit {

  jsonCategorias = []

  constructor(private service: EstatisticasCategoriasService) {
   }

  ngOnInit() {

    this.service.buscarEstatisticasCategoria().subscribe(data => {
        this.jsonCategorias = data["data"];
        let listaCategorias = []
        let listaCategoriasValue = []
        for(let key in this.jsonCategorias){
          if(this.jsonCategorias[key]!=undefined){
            listaCategorias.push(key)
            listaCategoriasValue.push((this.jsonCategorias[key]).length)
          }
        }
        console.log(listaCategorias)
        console.log(listaCategoriasValue)
        new roughViz.Pie(
          {
            element: '#vis1',
            titleFontSize: '3rem',
            legend: false,
            margin: {top: 50, bottom: 100, left: 40, right: 100},
            data: {
              labels: listaCategorias,
              values: listaCategoriasValue
            },
            strokeWidth: 4,
            fillStyle: 'zigzag-line',
            highlight: 'gold',
          }
        );
    });



  }

}
