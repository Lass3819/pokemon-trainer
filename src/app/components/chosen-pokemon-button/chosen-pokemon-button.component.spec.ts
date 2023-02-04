import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenPokemonButtonComponent } from './chosen-pokemon-button.component';

describe('ChosenPokemonButtonComponent', () => {
  let component: ChosenPokemonButtonComponent;
  let fixture: ComponentFixture<ChosenPokemonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenPokemonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenPokemonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
