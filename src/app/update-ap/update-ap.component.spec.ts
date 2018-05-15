import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApComponent } from './update-ap.component';

describe('UpdateApComponent', () => {
  let component: UpdateApComponent;
  let fixture: ComponentFixture<UpdateApComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
