import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Frase } from './../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  //Obtendo objetos atribuidos à contante FRASES
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = '' 

  public rodada: number = 0
  public rodadaFrase!: Frase

  public progresso: number = 0

  public tentativas: number = 3

  //o decorador Output segue a mesma lógica do Input porém 
  //tem como objetivo ser enchergado por componentes pais
  //e pelo o que entendi, o EventEmitter tem o papel de
  //criar eventos customizados que poderão ser observados 
  //com o (event binding)  
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  //metodo criado para event binding

  //recebe como parametro o evento e uma copia do elemento HTML
  //em forma de objeto onde podemos explorar seus atributos porém,
  //para acessar valores do elemento HTML, temos que informar ao 
  //TypeScript que se trata de <HTMLInputElement>
  //Devo substituir resposta.target.value por 
  //(<HTMLInputElement>resposta.target).value
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void{

    if (this.rodadaFrase.frasePtBr == this.resposta){
      alert('A tradução está correta')

      //trocar pergunda da rodada
      this.rodada++

      //barra progresso 
      //Esssa variavel "progresso" existe com o mesmo nome no componente filho progresso.component.ts
      //ela esta decorada com o parametro @Input() para receber valores como parametro
      //Ao instanciar <app-progresso></app-progresso> dentro do painel.component.html
      //devo fazer uma correalação do atributo painel [progresso] com atributo 
      //[progresso] do componente progresso usando property binding 
      //<app-progresso [progresso] = "progresso"></app-progresso> 
      this.progresso = this.progresso + (100 / this.frases.length)

      if(this.rodada === 4) {
        //emitindo um evendo que será capturado pelo componente pai (app.component.ts)
        this.encerrarJogo.emit('vitoria')
      }

      //atualiza o objeto rodadaFrase
      this.atualizaRodada()

    } else {
      //decrementar a variavel tentativas
      this.tentativas--
      if(this.tentativas === -1){        
        //emitindo um evendo que será capturado pelo componente pai (app.component.ts)
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  atualizaRodada() {
    
    //define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada]

    //limpar resposta
    this.resposta = ''
  }

}
