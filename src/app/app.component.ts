import { Component } from '@angular/core';
import { faDog, faMapMarkedAlt, faWalking, faMedal, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

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
  faMedal = faMedal;
  faEvent = faCalendarDay;

}
