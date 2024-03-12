import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
})
export class HeaderNavComponent {
  sideBarOpen: boolean = false;

  handleShowSidebarEvent($event: any) {
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
