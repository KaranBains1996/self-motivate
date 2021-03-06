import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideExpandAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideExpandAnimation
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
