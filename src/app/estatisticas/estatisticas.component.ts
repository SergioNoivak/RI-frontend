import { Component, OnInit } from '@angular/core';
import * as roughViz from 'rough-viz'
import { EstatisticasService } from './estatisticas.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss']
})
export class EstatisticasComponent implements OnInit {

  constructor(private service: EstatisticasService) {
    this.service.getNomeDocs().subscribe(dados=>{
      this.nomeDocs = dados["data"]
      console.log(this.nomeDocs)
    })
  }
  ajustarGrafico(){

    console.log("dfdsafsa")

  }
  nomeDocs = []
  tf: Array<any> = []
  radius = []
  highlightLabel = []
  labels = []
  async ngOnInit() {
    this.service.getidf().subscribe(data => {
      this.tf = Object.entries(data["data"])
      for (let i = 0; i < this.tf.length; i++) {
        this.radius.push(+this.tf[i][1] * 300)
        this.labels.push(this.tf[i][0])

      }

      console.log(this.radius)
      new roughViz.Scatter(
        {
          element: '#vis1',
          data: {
            x: Array.from(Array(this.tf.length), (x, i) => i),
            y: Array.from(Array(this.tf.length), (x, i) => 240 * Math.random()),
          },
          title: 'Tfs do documento',
          width: 800,
          roughness: 0,
          radius: this.radius,
          fillWeight: 3,

          axisRoughness: 1,
          height: 950,
          colors: ['green']
        }
      );

    })

  }

}
