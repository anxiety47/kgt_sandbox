import { Component } from '@angular/core';
import { faDog, faMapMarkedAlt, faWalking, faMedal, faCalendarDay, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kgt';
  faDog = faDog;
  faPerson = faWalking;
  faMap = faMapMarkedAlt;
  faCertificate = faMedal;
  faEvent = faCalendarDay;
  faMenu = faBars;

  toggleMenu(element: HTMLElement): void {
    element.classList.toggle('expand')
  }

}
