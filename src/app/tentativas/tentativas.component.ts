import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Coracao } from './../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges, OnInit {

  @Input() public tentativas!: number;

  //inicializando um array com corações cheios
  //Note que parametros foram omitidos devido à construção da classe
  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
    //verificar ciclo de vida do componente (LifeCicle Hooks) class 89
    //console.log('Tentativas recebidas do painel: ' , this.tentativas)
  }

  ngOnChanges(): void {
    //Obtendo atualizações do atributo tentativas do componente painel.component.ts
    //console.log('Tentativas recebidas do painel: ' , this.tentativas)

    //alterando a propriedade dos corações em caso de resposta incorreta
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false
    }
  }

  ngOnInit(): void {
   
  }

}
