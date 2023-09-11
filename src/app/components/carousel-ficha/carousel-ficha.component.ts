import { Component, Input } from '@angular/core';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-carousel-ficha',
  templateUrl: './carousel-ficha.component.html',
  styleUrls: ['./carousel-ficha.component.css']
})
export class CarouselFichaComponent {


  @Input() datosCarousel:any;
  url:string= GLOBAL.url_imagen;


}
