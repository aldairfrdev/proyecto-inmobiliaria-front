import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';

//import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-imagen',
  templateUrl: './add-imagen.component.html',
  styleUrls: ['./add-imagen.component.css']
})

export class AddImagenComponent implements OnInit {

  
  id:number;

  urlImagen:string;
  aImagenes:string[]=[];

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _mediaService:MediaService
  ) {}


  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void{
    
    this._route.params.subscribe({

      next:(params) => { this.id=params['id']}
      ,
      error:(error) => { this._router.navigate(["/error"]) }
      ,
      complete:() => {}

    });
  
  }

  upload(e:any) :void{

    //this.aImagenes = e.target.files;
    const file = e.target.files[0];
    
    
    if(file){

      for(let file of e.target.files){ //por cada imagen llamamos a la API para que pueda subirse
      
      
        const formData = new FormData();
        formData.append('file', file);

        this._mediaService.uploadFile(formData, this.id).subscribe({

          next: (response) => {
            
            console.log(response);

            //para mostrar la imagen una vez subida
            this.urlImagen = response.url;
            this.aImagenes.push(this.urlImagen);

          }
          ,
          error: (error) => {console.log(error)}
          ,
          complete: () => {}

        });

      } //end for()

    } //end if()

  }



}
