import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelNavBarComponent } from './intel-nav-bar.component';

describe('IntelNavBarComponent', () => {
  let component: IntelNavBarComponent;
  let fixture: ComponentFixture<IntelNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
