import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteuserdialogComponent } from './deleteuserdialog.component';

describe('DeleteuserdialogComponent', () => {
  let component: DeleteuserdialogComponent;
  let fixture: ComponentFixture<DeleteuserdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteuserdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteuserdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
