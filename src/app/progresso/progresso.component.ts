import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //Não esquecer de importar a função @Input do core do Angular 
  //import { Input } from '@angular/core';
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
