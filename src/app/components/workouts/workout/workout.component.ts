import {Component, OnInit} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {WorkoutService} from "../../../services/workout.service";
import {Workout} from "../../../interfaces/Workout";

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [
    MatIcon, RouterLink, MatListItem, MatDivider, MatList, MatListSubheaderCssMatStyler
  ],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.css'
})
export class WorkoutComponent implements OnInit{


  workouts : Array<Workout> = [];

  constructor(private workoutService : WorkoutService) {
  }
  ngOnInit(): void {
    this.workoutService.getAllWorkouts().subscribe((workoutData)=>{
        console.log(workoutData)
      this.workouts = workoutData;
    },error => {
      console.log(error)
      }

    )

  }


  workoutImgURL : string = "src/app/images/dumbbell.png";



}
