import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-content">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
/*
    this.openPopup();
*/
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      disableClose: true,
      width: '400px' // Adjust the width as needed
    });
  }
}
