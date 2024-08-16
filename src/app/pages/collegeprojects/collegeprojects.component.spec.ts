import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeprojectsComponent } from './collegeprojects.component';

describe('CollegeprojectsComponent', () => {
  let component: CollegeprojectsComponent;
  let fixture: ComponentFixture<CollegeprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollegeprojectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollegeprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
