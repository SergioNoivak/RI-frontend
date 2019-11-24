import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConsultasService } from './consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  @ViewChild('query', { static: false }) query: ElementRef;
  @ViewChild('categoria', { static: false }) categoria: ElementRef;
   dropdownCategorias = [];
  constructor(private service: ConsultasService) {
  }

  ngOnInit() {
    this.service.getAllCategoria().subscribe(data=>{
      this.dropdownCategorias = data["data"]

      let listaCategorias = []
      for(let key in this.dropdownCategorias){
        if(this.dropdownCategorias[key]!=undefined){
          listaCategorias.push(key)
        }
      }
      this.dropdownCategorias = listaCategorias;
    })

  }
  fazerConsulta(){
    let queryString = this.query.nativeElement.value
    this.service.fazerConsulta({"queryString":queryString,"categoria":this.categoria.nativeElement.value.value}).subscribe(data=>{
    })
  }


}
