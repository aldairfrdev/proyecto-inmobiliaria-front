import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CabeceraFooterComponent } from './components/cabecera-footer/cabecera-footer.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { PieFooterComponent } from './components/pie-footer/pie-footer.component';
import { ListHomeComponent } from './components/list-home/list-home.component';
import { FichaInmuebleComponent } from './components/ficha-inmueble/ficha-inmueble.component';
import { CarouselFichaComponent } from './components/carousel-ficha/carousel-ficha.component';
import { EurosPipe } from './pipes/euros.pipe';
import { NoImageDirective } from './directives/no-image.directive';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { DetailInmuebleComponent } from './components/detail-inmueble/detail-inmueble.component';
import { AddTipoComponent } from './components/add-tipo/add-tipo.component';
import { ListTipoComponent } from './components/list-tipo/list-tipo.component';
import { EditTipoComponent } from './components/edit-tipo/edit-tipo.component';
import { ActivoPipe } from './pipes/activo.pipe';
import { AddProvinciaComponent } from './components/add-provincia/add-provincia.component';
import { ApiInterceptor } from './utils/api.interceptor';
import { ListProvinciaComponent } from './components/list-provincia/list-provincia.component';
import { EditProvinciaComponent } from './components/edit-provincia/edit-provincia.component';
import { AddPoblacionComponent } from './components/add-poblacion/add-poblacion.component';
import { ListPoblacionComponent } from './components/list-poblacion/list-poblacion.component';
import { EditPoblacionComponent } from './components/edit-poblacion/edit-poblacion.component';
import { AddInmuebleComponent } from './components/add-inmueble/add-inmueble.component';
import { ListInmuebleComponent } from './components/list-inmueble/list-inmueble.component';
import { EditInmuebleComponent } from './components/edit-inmueble/edit-inmueble.component';
import { AddImagenComponent } from './components/add-imagen/add-imagen.component';
import { AmuebladoPipe } from './pipes/amueblado.pipe';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuPrincipalComponent,
    HomeComponent,
    ErrorComponent,
    CabeceraFooterComponent,
    MenuFooterComponent,
    PieFooterComponent,
    ListHomeComponent,
    FichaInmuebleComponent,
    CarouselFichaComponent,
    EurosPipe,
    NoImageDirective,
    PreloaderComponent,
    CarouselHomeComponent,
    DetailInmuebleComponent,
    AddTipoComponent,
    ListTipoComponent,
    EditTipoComponent,
    ActivoPipe,
    AddProvinciaComponent,
    ListProvinciaComponent,
    EditProvinciaComponent,
    AddPoblacionComponent,
    ListPoblacionComponent,
    EditPoblacionComponent,
    AddInmuebleComponent,
    ListInmuebleComponent,
    EditInmuebleComponent,
    AddImagenComponent,
    AmuebladoPipe,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [/* 
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:ApiInterceptor,
      multi:true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
