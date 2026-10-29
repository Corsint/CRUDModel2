import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RopaForm } from './ropa-form';

describe('RopaForm', () => {
  let component: RopaForm;
  let fixture: ComponentFixture<RopaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(RopaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
