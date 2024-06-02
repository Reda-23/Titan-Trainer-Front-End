export interface Workout{
  workoutId : number,
  workoutName: string
  duration: number
  level : WorkoutLevel;
  note: string,
  favorite : boolean,
}


export enum WorkoutLevel{


  Beginner = 'Beginner',
  Medium = 'Medium',
  Hard = 'Hard'
}


