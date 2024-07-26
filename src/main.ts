import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter} from '@angular/router';
import routeConfig from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ]
})
  .catch((err) => console.error(err));