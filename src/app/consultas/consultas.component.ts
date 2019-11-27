import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ConsultasService } from "./consultas.service";

@Component({
  selector: "app-consultas",
  templateUrl: "./consultas.component.html",
  styleUrls: ["./consultas.component.scss"]
})
export class ConsultasComponent implements OnInit {
  @ViewChild("query", { static: false }) query: ElementRef;
  @ViewChild("categoria", { static: false }) categoria: ElementRef;
  @ViewChild("R", { static: false }) R: ElementRef;
  feitoConsulta:boolean = false
  calculadoMetricas:boolean = false
  dropdownCategorias = [];
  documentosEPesos = [];
  numeroDeRelevantes = 0;
  metricaPrecisao = 0;
  metricaRevocacao = 0;
  constructor(private service: ConsultasService) {}
  getColor(value) {
    //value from 0 to 1
    var hue = ((1 - value) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
  }

  ngOnInit() {
    this.service.getAllCategoria().subscribe(data => {
      this.dropdownCategorias = data["data"];

      let listaCategorias = [];
      for (let key in this.dropdownCategorias) {
        if (this.dropdownCategorias[key] != undefined) {
          listaCategorias.push(key);
        }
      }
      this.dropdownCategorias = listaCategorias;
    });
  }
  fazerConsulta() {
    this.calculadoMetricas = false;

    this.feitoConsulta = true;
    this.numeroDeRelevantes = 0;
    let queryString = this.query.nativeElement.value;
    this.service
      .fazerConsulta({
        queryString: queryString,
        categoria: this.categoria.nativeElement.value.value
      })
      .subscribe(data => {
        this.documentosEPesos = data["data"];
        this.documentosEPesos.forEach(element => {
          if (element["similaridade"] > 0.5) this.numeroDeRelevantes++;

          element["cor"] = this.getColor(element["similaridade"]);
        });

      });
  }

  calcularPrecisao() {
    this.metricaPrecisao  = (
      (this.numeroDeRelevantes + this.R.nativeElement.value) /
      this.R.nativeElement.value
    );
  }
  calcularRevocacao(){

    this.metricaRevocacao  = (
      (this.numeroDeRelevantes + this.R.nativeElement.value) /
      this.numeroDeRelevantes
    );

  }

  calcularMetricas(){
    this.calculadoMetricas = true;
    this.calcularPrecisao();
    this.calcularRevocacao();
  }
}
