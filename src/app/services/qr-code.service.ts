import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  path : string ='http://localhost:8080/api'

  constructor(private http : HttpClient) { }





  public generateQRCodeForClient(clientId : number) : Observable<any>{
    return this.http.get(`${this.path}/QRCode/generate/${clientId}`,{responseType : 'arraybuffer'});
  }
}
