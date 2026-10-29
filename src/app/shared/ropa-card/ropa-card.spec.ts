import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RopaCard } from './ropa-card';

describe('RopaCard', () => {
  let component: RopaCard;
  let fixture: ComponentFixture<RopaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RopaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
