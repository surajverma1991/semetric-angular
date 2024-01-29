import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcatComponent } from './contcat.component';

describe('ContcatComponent', () => {
  let component: ContcatComponent;
  let fixture: ComponentFixture<ContcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
