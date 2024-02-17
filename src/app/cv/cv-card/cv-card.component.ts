import { CvCard } from './../cv-card';
import { Component, Input } from '@angular/core';
import { CvModule } from '../cv.module';

@Component({
  selector: 'app-cv-card',
  standalone: true,
  imports: [CvModule],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css'
})
export class CvCardComponent {
  @Input() cvCard: CvCard | undefined
}
