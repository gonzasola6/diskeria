import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskList } from './disk-list';

describe('DiskList', () => {
  let component: DiskList;
  let fixture: ComponentFixture<DiskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiskList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiskList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
