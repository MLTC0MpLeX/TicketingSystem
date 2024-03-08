import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {
  ticketForm: FormGroup = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email])
  });

  message: string = "";
  constructor(private ticketService: TicketService) { }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.ticketService.createTicket(this.ticketForm.value).subscribe(response => {
        console.log(response);
        this.message = 'Ticket added';
      }, error => {
        console.error(error);
        this.message = 'Error occurred';
      });
    }
  }
}