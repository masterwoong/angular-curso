import { Component  } from '@angular/core';
import { HEADER_OFFSET } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes : string[] = ['Spiderman','Hulk','Batman','huazon','superman'];
  heroesBorrados : string = '';
 

 

  borrarHeroe() : void {

    console.log('Borrando Heroe');
  

    

 this.heroesBorrados = this.heroes.shift() || '' ;
 

  }

}
