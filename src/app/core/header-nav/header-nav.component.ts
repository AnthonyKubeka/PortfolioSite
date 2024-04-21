import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionBulbOutline, ionBulbSharp } from '@ng-icons/ionicons';
import { ThemeService } from '../../shared/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterModule, SidebarComponent, NgIconComponent, CommonModule],
  providers: [provideIcons({ionBulbOutline, ionBulbSharp})],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
})
export class HeaderNavComponent {
  @Output() sideBarOpen = new EventEmitter<boolean>();
  isDarkModeOn = false;
  constructor(private themeService: ThemeService){}

  toggleSidebar() {
    this.sideBarOpen.emit(true);
  }

  toggleDarkMode() {
    this.isDarkModeOn = !this.isDarkModeOn;
    this.themeService.toggleDarkMode();
  }
}
