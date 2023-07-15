import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HeroesListaComponent } from './lista/heroes-lista/heroes-lista.component';



@NgModule({
  declarations: [
    HeroComponent,
    HeroesListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    HeroesListaComponent
  ]
})
export class HeroesModule { }
