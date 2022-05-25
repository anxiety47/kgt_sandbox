import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { navigationElements } from './navigation-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faMenu = faBars;
  navigationElements = navigationElements;

  toggleMenu(element: HTMLElement): void {
    element.classList.toggle('expand');
  }
}
