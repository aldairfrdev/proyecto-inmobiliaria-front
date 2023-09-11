import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  url:string = GLOBAL.url_media;

  constructor(
    private _http:HttpClient
  ) { }

  uploadFile(formData:FormData, id:number): Observable<any>{

    return this._http.post(this.url+"upload/"+id,formData);
  }

  getFile(formData:FormData, fileName:string): Observable<any>{

    return this._http.get(this.url+"file/"+fileName);
  }
}
