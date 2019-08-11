import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ativos-cadastro',
  templateUrl: './ativos-cadastro.component.html',
  styleUrls: ['./ativos-cadastro.component.css']
})
export class AtivosCadastroComponent implements OnInit {

  constructor() { }

  br: any;
  categorias: any;
  listaAnoFabricacao: any;

    ngOnInit() {
        this.br = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
            'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez' ],
            today: 'Hoje',
            clear: 'Limpar',
            dateFormat: 'dd/mm/y',
            weekHeader: 'Wk'
        };

        this.categorias = [
          { label: 'Perfuração e desmonte', value: 1 },
          { label: 'Carregamento', value: 2 },
          { label: 'Transporte', value: 3 },
          { label: 'Apoio', value: 4 },
          { label: 'Outros', value: 5 }
        ];

        this.listaAnoFabricacao = [
          { label: '2019', value: 2019 },
          { label: '2018', value: 2018 },
          { label: '2017', value: 2017 },
          { label: '2016', value: 2016 },
          { label: '2015', value: 2015 },
          { label: '2014', value: 2014 },
          { label: '2013', value: 2013 },
          { label: '2012', value: 2012 },
          { label: '2011', value: 2011 },
          { label: '2010', value: 2010 },
          { label: '2009', value: 2009 },
          { label: '2008', value: 2008 },
          { label: '2007', value: 2007 }
        ];
    }

}
