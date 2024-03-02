import { StaticDataService } from './../static-data.service';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Technology } from '../../shared/technology';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  technologies: Technology[] = [];
  constructor(private staticDataService: StaticDataService){
    this.technologies = this.staticDataService.getTechnologies();
  }
}
