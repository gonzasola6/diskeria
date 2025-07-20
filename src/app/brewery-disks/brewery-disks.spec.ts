import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryDisks } from './brewery-disks';

describe('BreweryDisks', () => {
  let component: BreweryDisks;
  let fixture: ComponentFixture<BreweryDisks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreweryDisks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryDisks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
