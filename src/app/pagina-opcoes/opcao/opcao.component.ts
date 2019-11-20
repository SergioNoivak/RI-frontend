import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opcao',
  templateUrl: './opcao.component.html',
  styleUrls: ['./opcao.component.scss']
})
export class OpcaoComponent implements OnInit {
  @Input()cor;
  @Input()texto;
  @Input()icone;
  @Input()rota;

  constructor() { }

  ngOnInit() {
  }

}
