import {Component} from '@angular/core'


@Component({
    selector : 'app-contador',
    template:  `
    
    
  <h1>
    la base es : {{base}}
  </h1>

<button (click)="acumular(base)">+{{base}}</button>
<button (click)="acumular(-base)">-{{base}}</button>
<span>{{numero}}</span>
    
    
    `


})
export class ContadorComponent {

    titulo : string = 'Contador app';
numero : number = 10;
base : number = 5;

acumular(valor : number){

this.numero += valor;
  
}


  

}