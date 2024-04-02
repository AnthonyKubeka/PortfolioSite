import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { TechStackListComponent } from '../tech-stack-list/tech-stack-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [TechStackListComponent, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
