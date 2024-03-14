import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderNavComponent, FooterComponent, SidebarComponent ],
  exports: [
    HeaderNavComponent, FooterComponent, SidebarComponent
  ]
})
export class CoreModule { }
