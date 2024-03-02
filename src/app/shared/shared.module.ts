import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsCardComponent } from './skills-card/skills-card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SkillsCardComponent
  ],
  exports: [
    SkillsCardComponent
  ]
})
export class SharedModule { }
