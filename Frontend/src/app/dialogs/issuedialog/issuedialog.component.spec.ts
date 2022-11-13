import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedialogComponent } from './issuedialog.component';

describe('IssuedialogComponent', () => {
  let component: IssuedialogComponent;
  let fixture: ComponentFixture<IssuedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
