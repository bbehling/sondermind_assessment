import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyLineComponent } from './assembly-line.component';

describe('AssemblyLineComponent', () => {
  let component: AssemblyLineComponent;
  let fixture: ComponentFixture<AssemblyLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
