import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookreturndialogComponent } from './bookreturndialog.component';

describe('BookreturndialogComponent', () => {
  let component: BookreturndialogComponent;
  let fixture: ComponentFixture<BookreturndialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookreturndialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookreturndialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
