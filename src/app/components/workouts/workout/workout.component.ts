import {Component, OnInit} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {WorkoutService} from "../../../services/workout.service";
import {Workout} from "../../../interfaces/Workout";
import {JsonPipe, NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [
    MatIcon, RouterLink, MatListItem, MatDivider, MatList, MatListSubheaderCssMatStyler, JsonPipe, NgClass, NgStyle
  ],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.css'
})
export class WorkoutComponent implements OnInit{


  workouts : Array<Workout> = [];
  levels : string[] = [];

  constructor(private workoutService : WorkoutService) {
  }
  ngOnInit(): void {
    this.returnAllWorkouts();

  }


  returnAllWorkouts(){
    this.workoutService.getAllWorkouts().subscribe((workoutData)=>{
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


  modifyFavorite(workoutId: number) {
    if (confirm('add/remove  workout from favorites ?')) {
      this.workoutService.updateWorkout(workoutId).subscribe((response)=>{
      this.returnAllWorkouts();
    },(error)=>{
      console.log(error)
    })
  }}

}
