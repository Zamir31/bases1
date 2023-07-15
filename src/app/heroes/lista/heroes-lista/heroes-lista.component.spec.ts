import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListaComponent } from './heroes-lista.component';

describe('HeroesListaComponent', () => {
  let component: HeroesListaComponent;
  let fixture: ComponentFixture<HeroesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
