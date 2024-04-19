import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../interfaces/Exercise";
import {Page} from "../interfaces/Page";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  path : string = "http://localhost:8080/api/exercise";
  constructor(private http : HttpClient) { }



  public getAllExercises(page : number , size : number) : Observable<Page<Exercise>> {
    return this.http.get<Page<Exercise>>(`${this.path}/exercises?page=${page}&size=${size}`);
  }

}
