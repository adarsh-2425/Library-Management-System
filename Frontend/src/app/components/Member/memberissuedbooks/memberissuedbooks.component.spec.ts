import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberissuedbooksComponent } from './memberissuedbooks.component';

describe('MemberissuedbooksComponent', () => {
  let component: MemberissuedbooksComponent;
  let fixture: ComponentFixture<MemberissuedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberissuedbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberissuedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
