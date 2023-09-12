import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailInmuebleComponent } from './components/detail-inmueble/detail-inmueble.component';
import { AddTipoComponent } from './components/add-tipo/add-tipo.component';
import { ListTipoComponent } from './components/list-tipo/list-tipo.component';
import { EditTipoComponent } from './components/edit-tipo/edit-tipo.component';
import { AddProvinciaComponent } from './components/add-provincia/add-provincia.component';
import { ListProvinciaComponent } from './components/list-provincia/list-provincia.component';
import { EditProvinciaComponent } from './components/edit-provincia/edit-provincia.component';
import { AddPoblacionComponent } from './components/add-poblacion/add-poblacion.component';
import { ListPoblacionComponent } from './components/list-poblacion/list-poblacion.component';
import { EditPoblacionComponent } from './components/edit-poblacion/edit-poblacion.component';
import { AddInmuebleComponent } from './components/add-inmueble/add-inmueble.component';
import { ListInmuebleComponent } from './components/list-inmueble/list-inmueble.component';
import { EditInmuebleComponent } from './components/edit-inmueble/edit-inmueble.component';
import { AddImagenComponent } from './components/add-imagen/add-imagen.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"inmueble/:id", component:DetailInmuebleComponent},
  {path:"add-inmueble",component:AddInmuebleComponent},
  {path:"list-inmueble",component:ListInmuebleComponent},
  {path:"edit-inmueble/:id",component:EditInmuebleComponent},
  {path:"add-tipo",component:AddTipoComponent},
  {path:"list-tipo",component:ListTipoComponent},
  {path:"edit-tipo/:id",component:EditTipoComponent},
  {path:"add-provincia",component:AddProvinciaComponent},
  {path:"list-provincia",component:ListProvinciaComponent},
  {path:"edit-provincia/:id",component:EditProvinciaComponent},
  {path:"add-poblacion",component:AddPoblacionComponent},
  {path:"list-poblacion",component:ListPoblacionComponent},
  {path:"edit-poblacion/:id",component:EditPoblacionComponent},
  {path:"add-imagen/:id",component:AddImagenComponent},
  {path:"login",component:LoginComponent},
  {path:"error",component:ErrorComponent},
  {path:"**",component:ErrorComponent} //Poner siempre en la última posición!!!.Path por si la ruta no existe
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
