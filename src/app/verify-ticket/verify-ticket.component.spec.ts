import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyTicketComponent } from './verify-ticket.component';

describe('VerifyTicketComponent', () => {
  let component: VerifyTicketComponent;
  let fixture: ComponentFixture<VerifyTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
