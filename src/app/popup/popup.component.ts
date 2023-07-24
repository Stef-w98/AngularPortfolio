import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  template: `
    <div class="container2">
      <h1 class="title">Site Under Construction</h1>
      <div class="loader"></div>
      <p class="subtitle">Thank you for visiting! <br> I am currently working on something amazing. Stay tuned!</p>
      <button class="close-button" (click)="closePopup()">Continue</button>
    </div>
  `,
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(private dialogRef: MatDialogRef<PopupComponent>) {}

  closePopup(): void {
    this.dialogRef.close();
  }
}
