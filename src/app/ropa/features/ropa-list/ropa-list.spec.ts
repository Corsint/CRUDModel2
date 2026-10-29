import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RopaList } from './ropa-list';

describe('RopaList', () => {
  let component: RopaList;
  let fixture: ComponentFixture<RopaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaList],
    }).compileComponents();

    fixture = TestBed.createComponent(RopaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
