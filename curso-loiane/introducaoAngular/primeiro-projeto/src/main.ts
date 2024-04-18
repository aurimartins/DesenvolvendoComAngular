import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {MeuPrimeiroComponent} from './app/meu-primeiro/meu-primeiro.component'

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
