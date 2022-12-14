import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticosComponent } from './practicos.component';

describe('PracticosComponent', () => {
  let component: PracticosComponent;
  let fixture: ComponentFixture<PracticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
