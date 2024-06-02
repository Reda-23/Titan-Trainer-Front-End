import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExerciseService} from "../../../services/exercise.service";
import {Exercise} from "../../../interfaces/Exercise";
import {JsonPipe, NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {MatPaginator} from "@angular/material/paginator";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage,
    MatPaginator,
    NgForOf,
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent implements OnInit {

  exercises : Array<Exercise> = [];
  keyword : string = '';
  searchForm! : FormGroup;

  lenght : number = 0;

  clickedButton : string = "All";





  constructor(private exerciseService : ExerciseService,
              private fb : FormBuilder) {
  }

    ngOnInit(): void {
    this.getExercises();

    this.searchForm = this.fb.group({
      keyword :  ['']
    });
    }

    getExercises(){
      return this.exerciseService.getAllExercises().subscribe((exercisesData)=>{
        this.exercises = exercisesData;
        this.lenght = exercisesData.length;
      },error => {
        console.log(error)
      })
    }


    searchExercises(){
    this.exerciseService.searchExercises(this.searchForm.value.keyword).subscribe((response)=>{
      this.exercises = response;
      this.lenght = response.length;
    })

    }



    returnImage(url : string) : string{
        if (url){
          return url;
        }
        return "/assets/dumbbell.png";
    }



  handleLegsExercises() {
    return this.exerciseService.getAllLegsExercises().subscribe((response)=>{
      this.exercises = response;
      this.lenght = response.length;
      this.clickedButton = 'Legs';
    },(error)=>{
      console.log(error)
    })

  }

  handleChestExercises() {

    return this.exerciseService.getAllChestExercises().subscribe((response)=>{
      this.exercises = response;
      this.clickedButton = 'Chest';
      this.lenght = response.length;
    },(error)=>{
      console.log(error)
    })
  }

  handleBackExercises() {
    return this.exerciseService.getAllBackExercises().subscribe((response)=>{
      this.exercises = response;
      this.clickedButton = 'Back';
      this.lenght = response.length;
    },(error)=>{
      console.log(error)
    })
  }

  handleArmsExercises() {
    return this.exerciseService.getAllArmsExercises().subscribe((response)=>{
      this.exercises = response;
      this.clickedButton = 'Arms';
      this.lenght = response.length;
    },(error)=>{
      console.log(error)
    })
  }

  handleShouldersExercises() {
    return this.exerciseService.getAllShouldersExercises().subscribe((response)=>{
      this.exercises = response;
      this.clickedButton = 'Shoulders';
      this.lenght = response.length;
    },(error)=>{
      console.log(error)
    })
  }
}
