import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasyComponent } from './gasy.component';

describe('GasyComponent', () => {
  let component: GasyComponent;
  let fixture: ComponentFixture<GasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
