import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasyListComponent } from './gasy-list.component';

describe('GasyListComponent', () => {
  let component: GasyListComponent;
  let fixture: ComponentFixture<GasyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GasyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
