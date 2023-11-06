import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  num1:number = 0;
  num2:number = 0;

  MostrarFlag:boolean = false;

  numeroMayor:string = "";

  mostrar() {
    if (this.num1 == this.num2) {
      this.numeroMayor = "Ambos numero son iguales!";
    }else if (this.num1 > this.num2) {
      this.numeroMayor = `El numero mayor es el primer numero (${this.num1})`
    }else {
      this.numeroMayor = `El numero mayor es el segundo numero (${this.num2})`
    }
    this.MostrarFlag = true;
  }
}
