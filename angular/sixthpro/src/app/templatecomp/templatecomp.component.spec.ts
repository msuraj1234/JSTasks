import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatecompComponent } from './templatecomp.component';

describe('TemplatecompComponent', () => {
  let component: TemplatecompComponent;
  let fixture: ComponentFixture<TemplatecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
