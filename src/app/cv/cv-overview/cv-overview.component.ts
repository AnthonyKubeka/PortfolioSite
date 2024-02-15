import { Component } from '@angular/core';
import { CvCardComponent } from '../cv-card/cv-card.component';

@Component({
  selector: 'app-cv-overview',
  standalone: true,
  imports: [CvCardComponent],
  templateUrl: './cv-overview.component.html',
  styleUrl: './cv-overview.component.css'
})
export class CvOverviewComponent {

}
