import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
    <h1>{{ data.message }}</h1>
    <button class="btn btn-primary" mat-button (click)="onNextClick()">Next QR Code</button>
  `,
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private dialogRef: MatDialogRef<DialogComponent>
  ) { }

  onNextClick() {
    this.dialogRef.close();
  }
}