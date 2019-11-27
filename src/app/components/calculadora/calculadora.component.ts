import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  titulo = 'Indice de Masa Corporal';
  titulo2 = 'Indice de Grasa Corporal';
  titulo3 = 'Litros de Agua al Dia';
 
  Altura:number;
  Peso:number;
  resultado:number;
  
  resultado3:number;

  onIMC():void{
    this.resultado = this.Peso / this.Altura;
  }

  onLitros():void{
    if(this.Peso <= 36){
      this.resultado3 = 1.1;
    }else if(this.Peso > 36 && this.Peso <= 45){
      this.resultado3 = 1.47;
    }else if(this.Peso > 45 && this.Peso <= 54){
      this.resultado3 = 1.77;
    }
  }

  constructor() {     
  }

  ngOnInit() {    
  }

}
