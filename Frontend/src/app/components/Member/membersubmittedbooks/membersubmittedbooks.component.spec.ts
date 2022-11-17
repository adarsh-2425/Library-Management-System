import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersubmittedbooksComponent } from './membersubmittedbooks.component';

describe('MembersubmittedbooksComponent', () => {
  let component: MembersubmittedbooksComponent;
  let fixture: ComponentFixture<MembersubmittedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersubmittedbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersubmittedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
