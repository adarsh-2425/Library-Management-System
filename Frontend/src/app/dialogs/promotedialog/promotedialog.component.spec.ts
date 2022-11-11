import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedialogComponent } from './promotedialog.component';

describe('PromotedialogComponent', () => {
  let component: PromotedialogComponent;
  let fixture: ComponentFixture<PromotedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
