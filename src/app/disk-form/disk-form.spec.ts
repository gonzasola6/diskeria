import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskForm } from './disk-form';

describe('DiskForm', () => {
  let component: DiskForm;
  let fixture: ComponentFixture<DiskForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiskForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiskForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
