import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../../../services/exercise.service";
import {Exercise} from "../../../interfaces/Exercise";
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent implements OnInit{

  exercises : Array<Exercise> = [];
  totalPages : number = 0;
  currentPage : number = 1;
  totalElement : number =0;
  size : number = 10;


  constructor(private exerciseService : ExerciseService) {
  }
    ngOnInit(): void {

    this.getExercises();

    }

    getExercises(){
      this.exerciseService.getAllExercises(this.currentPage,this.size).subscribe((exercisesData)=>{
        this.exercises = exercisesData.content;
        this.totalPages = exercisesData.totalPages;
        this.totalElement = exercisesData.totalElements;
        this.size = exercisesData.size;

      },error => {
        console.log(error)
      })
    }


    returnImage(url : string) : string{
        if (url){
          return url;
        }
        return "/assets/dumbbell.png";
    }

  handlePage( page : number) {
   this.currentPage = page;
   this.getExercises();


  }

  nextPage() {
    if (this.currentPage < this.totalPages){
      this.currentPage ++;
      this.getExercises();
    }
  }

  previousPage() {
    if (this.currentPage > 1){
      this.currentPage --;
      this.getExercises();
    }
  }
}
