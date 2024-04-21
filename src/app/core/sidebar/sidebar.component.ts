import { ThemeService } from './../../shared/theme.service';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionBulbOutline, ionBulbSharp } from '@ng-icons/ionicons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, NgIconComponent],
  providers: [provideIcons({ionBulbOutline, ionBulbSharp})],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() showSidebar = new EventEmitter<boolean>();
  isDarkModeOn = false;
  constructor(private themeService: ThemeService){}

toggleSidebar() {
    this.showSidebar.emit(true);
}

toggleDarkMode(){
  this.isDarkModeOn = !this.isDarkModeOn;
  this.themeService.toggleDarkMode();
}
}
