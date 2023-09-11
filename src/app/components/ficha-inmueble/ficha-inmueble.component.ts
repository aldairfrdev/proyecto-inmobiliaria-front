import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ficha-inmueble',
  templateUrl: './ficha-inmueble.component.html',
  styleUrls: ['./ficha-inmueble.component.css']
})
export class FichaInmuebleComponent {

  @Input() datos:any;

}
