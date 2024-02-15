import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { TechStackListComponent } from '../tech-stack-list/tech-stack-list.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [TechStackListComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
