import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthoriseComponent } from './not-authorise.component';

describe('NotAuthoriseComponent', () => {
  let component: NotAuthoriseComponent;
  let fixture: ComponentFixture<NotAuthoriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAuthoriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
