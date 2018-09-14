import { Component, Input } from "@angular/core";
import { faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'gg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})

export class GGNavigationComponent {
  faHome = faHome
  @Input() tagHolder:string[] = []; 
}