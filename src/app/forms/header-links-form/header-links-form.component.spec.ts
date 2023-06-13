import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLinksFormComponent } from './header-links-form.component';

describe('HeaderLinksFormComponent', () => {
  let component: HeaderLinksFormComponent;
  let fixture: ComponentFixture<HeaderLinksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLinksFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLinksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
