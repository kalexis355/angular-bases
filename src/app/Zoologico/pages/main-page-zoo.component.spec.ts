import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageZooComponent } from './main-page-zoo.component';

describe('MainPageZooComponent', () => {
  let component: MainPageZooComponent;
  let fixture: ComponentFixture<MainPageZooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageZooComponent]
    });
    fixture = TestBed.createComponent(MainPageZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
