import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMascotaComponent } from './add-mascota.component';

describe('AddMascotaComponent', () => {
  let component: AddMascotaComponent;
  let fixture: ComponentFixture<AddMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMascotaComponent]
    });
    fixture = TestBed.createComponent(AddMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
