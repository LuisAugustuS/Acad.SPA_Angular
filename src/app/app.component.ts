import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public tipoDeEncerramento!: string;

  //parei aula 99 
 
  public encerrarJogo(tipo: string) : void {
    this.jogoEmAndamento = false
    this.tipoDeEncerramento = tipo
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoDeEncerramento = ''
  }
}
