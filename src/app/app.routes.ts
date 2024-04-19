import { Routes } from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {WebShopComponent} from "./components/web-shop/web-shop.component";
import {QrCodeComponent} from "./components/qr-code/qr-code.component";
import { WorkoutComponent } from './components/workouts/workout/workout.component';
import {ExerciseComponent} from "./components/workouts/exercise/exercise.component";
import {FavoriteComponent} from "./components/workouts/favorite/favorite.component";

export const routes: Routes = [

  {path : 'client' , component : ClientComponent},
  {path : 'web-shop' , component : WebShopComponent},
  {path : 'qrcode', component : QrCodeComponent},
  {path : 'workout', component :  WorkoutComponent},
  {path : 'exercise' , component : ExerciseComponent},
  {path : 'favorite', component : FavoriteComponent}

];
