import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypeTableComponent } from './usertype-table.component';

describe('UsertypeTableComponent', () => {
  let component: UsertypeTableComponent;
  let fixture: ComponentFixture<UsertypeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsertypeTableComponent]
    });
    fixture = TestBed.createComponent(UsertypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
