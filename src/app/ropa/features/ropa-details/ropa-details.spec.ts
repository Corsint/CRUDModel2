import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RopaDetails } from './ropa-details';

describe('RopaDetails', () => {
  let component: RopaDetails;
  let fixture: ComponentFixture<RopaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(RopaDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
