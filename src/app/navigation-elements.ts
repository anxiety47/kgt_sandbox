import { faDog, faMapMarkedAlt, faWalking, faMedal, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { NavigationElements } from './models/navigation.model';

export const navigationElements: NavigationElements[] = [
  {
    icon: faDog,
    label: 'Psy',
    routerLink: 'dogs'
  },
  {
    icon: faWalking,
    label: 'Przewodnicy',
    routerLink: 'guides'
  },
  {
    icon: faMapMarkedAlt,
    label: 'Treningi',
    routerLink: 'trainings'
  },
  {
    icon: faMedal,
    label: 'Certyfikaty',
    routerLink: 'certificates'
  },
  {
    icon: faCalendarDay,
    label: 'Wydarzenia',
    routerLink: 'events'
  }
]