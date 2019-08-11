import { Component, OnInit } from '@angular/core';
import { AtivosService } from '../ativos.service';

@Component({
  selector: 'app-ativos-pesquisa',
  templateUrl: './ativos-pesquisa.component.html',
  styleUrls: ['./ativos-pesquisa.component.css']
})
export class AtivosPesquisaComponent implements OnInit {

  ativos = [ ];

  constructor(private ativosService: AtivosService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.ativosService.pesquisar().then(ativos => {
      this.ativos = ativos;
    } );
  }
}
