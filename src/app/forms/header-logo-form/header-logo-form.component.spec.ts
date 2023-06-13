import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoFormComponent } from './header-logo-form.component';

describe('HeaderLogoFormComponent', () => {
  let component: HeaderLogoFormComponent;
  let fixture: ComponentFixture<HeaderLogoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLogoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLogoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
