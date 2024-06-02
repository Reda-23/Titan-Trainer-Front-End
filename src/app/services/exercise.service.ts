import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../interfaces/Exercise";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  path : string = "http://localhost:8080/api/exercise";
  constructor(private http : HttpClient) { }



  public getAllExercises() : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.path}/all`);
  }


  public searchExercises(exerciseName : string) : Observable<Exercise[]>{
      return this.http.get<Exercise[]>(`${this.path}/search?exerciseName=${exerciseName}`);
  }


  public getAllLegsExercises() : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.path}/all/legs`);
  }


  public getAllChestExercises() : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.path}/all/chest`);
  }


  public getAllArmsExercises() : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.path}/all/arms`);
  }

  public getAllBackExercises() : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.path}/all/back`);
  }

  public getAllShouldersExercises() : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.path}/all/shoulders`);
  }


}
