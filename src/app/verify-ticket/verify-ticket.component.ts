import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-verify-ticket',
  templateUrl: './verify-ticket.component.html',
  styleUrls: ['./verify-ticket.component.css']
})
export class VerifyTicketComponent {
  scanEnabled: boolean = true;

  constructor(private ticketService: TicketService, private dialog: MatDialog) { }

  onScanSuccess(qr_code_hash: string) {
    if (!this.scanEnabled) {
      return;
    }

    this.scanEnabled = false;

    this.ticketService.verifyTicket({ qr_code_hash }).subscribe(response => {
      let result: string;
      if (response.status === 'Valid') {
        result = '✔️ Valid'; // Set the result on success
      } else {
        result = '❌ Invalid'; // Set the result on failure
      }
      this.openDialog(result);
    }, error => {
      this.openDialog('An error has occurred'); // Set the result on error
    });
  }

  openDialog(result: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { message: result }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.scanEnabled = true;
    });
  }
  
}
