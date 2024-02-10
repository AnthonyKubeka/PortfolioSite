import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderNavComponent, FooterComponent ],
  exports: [
    HeaderNavComponent, FooterComponent
  ]
})
export class CoreModule { }
