import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as roughViz from 'rough-viz'
import { EstatisticasService } from './estatisticas.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss']
})
export class EstatisticasComponent implements OnInit {
   documentoSelecionado = "";
   @ViewChild('mydiv', { static: false }) mydiv: ElementRef;
   @ViewChild('canvas', { static: false }) canvas: ElementRef;



  constructor(private service: EstatisticasService) {

  }
  ajustarGrafico(){
    this.canvas.nativeElement.innerHTML = '    <div id="vis1"></div>';
    this.mudarGrafico(this.mydiv.nativeElement.value.value)
  }
  nomeDocs = []
  tf: Array<any> = []
  radius = []
  highlightLabel = []
  labels = []
  grafico = null;
  mudarGrafico(documento:string){
    this.radius = this.labels =this.tf= []
    this.service.getidf(documento).subscribe(data => {
      this.tf = Object.entries(data["data"])
      for (let i = 0; i < this.tf.length; i++) {
        this.radius.push(+this.tf[i][1] * 300)
        this.labels.push(this.tf[i][0])

      }

      // console.log(this.radius)
      this.grafico = new roughViz.Scatter(
        {
          element: '#vis1',
          data: {
            x: Array.from(Array(this.tf.length), (x, i) => i),
            y: Array.from(Array(this.tf.length), (x, i) => 240 * Math.random()),
          },
          title: 'Tfs do documento '+documento,
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

  async ngOnInit() {
    this.service.getNomeDocs().subscribe(dados=>{
      this.nomeDocs = dados["data"]
      // console.log(this.nomeDocs)
      this.mudarGrafico(this.nomeDocs[0])


  })
  }

}
