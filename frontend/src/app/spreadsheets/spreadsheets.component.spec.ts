import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetsComponent } from './spreadsheets.component';

describe('SpreadsheetsComponent', () => {
  let component: SpreadsheetsComponent;
  let fixture: ComponentFixture<SpreadsheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
