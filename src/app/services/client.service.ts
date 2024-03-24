import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  path : string ='http://localhost:8080/api'

  constructor(private http : HttpClient) { }

  public  getClientById(clientID:number) : Observable<Client>{
    return this.http.get<Client>(`${this.path}/client/${clientID}`);
  }

  public getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.path}/clients`)
  }


}
