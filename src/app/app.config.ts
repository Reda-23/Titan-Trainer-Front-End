import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideToastr} from "ngx-toastr";
import {provideAnimations} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) , provideHttpClient(), provideAnimationsAsync(), provideAnimations(),
    provideToastr({preventDuplicates : true})]
};
