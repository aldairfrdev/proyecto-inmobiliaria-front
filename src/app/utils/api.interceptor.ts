import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    //Clonamos request ya que es un objeto inmutable
    //Modificamos el clon 
    const requestCloned = request.clone({
      headers:request.headers
      .set('content-type','application/json')
      .set('Cache-Control','no-cache')//para evitar cacheos en las peticiones
      .set('Pragma','no-cache')//para evitar cacheos en las peticiones
      .set('Expires','Sat, 01 Jan 2000 00:00:00 GMT')//para evitar cacheos en las peticiones
    });
    return next.handle(requestCloned);
  }
}
