import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Workout} from "../interfaces/Workout";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http : HttpClient) { }



  path : string = "http://localhost:8080/api/workout";


  public getAllWorkouts() : Observable<Workout[]>{
    return this.http.get<Workout[]>(`${this.path}/workouts`);
  }


}
