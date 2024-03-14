import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { ProjectsModule } from './projects/projects.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, ProjectsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome To Anthony Kubeka\'s Portfolio!';
  sideBarOpen: boolean = false;

  toggleSidebar($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
