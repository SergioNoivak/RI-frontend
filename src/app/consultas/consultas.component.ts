import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConsultasService } from './consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  @ViewChild('query', { static: false }) query: ElementRef;

  constructor(private service: ConsultasService) {
  }

  ngOnInit() {
  }
  fazerConsulta(){
    let queryString = this.query.nativeElement.value
    this.service.fazerConsulta(queryString).subscribe(data=>{

    })
  }


}
