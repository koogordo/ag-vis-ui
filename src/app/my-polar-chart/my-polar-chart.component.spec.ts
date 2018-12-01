import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPolarChartComponent } from './my-polar-chart.component';

describe('MyPolarChartComponent', () => {
  let component: MyPolarChartComponent;
  let fixture: ComponentFixture<MyPolarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPolarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPolarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
