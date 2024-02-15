import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { TechStackListComponent } from './tech-stack-list/tech-stack-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeroComponent
  ],
  exports: [HeroComponent]
})
export class LandingModule { }
