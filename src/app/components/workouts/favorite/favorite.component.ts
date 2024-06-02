import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Workout} from "../../../interfaces/Workout";
import {WorkoutService} from "../../../services/workout.service";

@Component({
  selector: 'app-favorite',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  workouts : Array<Workout> = [];

  constructor(private workoutService : WorkoutService) {
  }
  ngOnInit(): void {
    this.returnAllWorkouts();

  }


  returnAllWorkouts(){
    this.workoutService.getFavoriteWorkouts().subscribe((workoutData)=>{
        this.workouts = workoutData;
      },error => {
        console.log(error)
      }

    )
  }


  public returnColorBasedOnLevel(level : string) : string{
    if (level == 'Hard'){
      return 'badge bg-danger ms-1'
    }else if (level == 'Medium'){
      return 'badge bg-warning ms-1';
    }
    return 'badge bg-success ms-1';
  }



}
