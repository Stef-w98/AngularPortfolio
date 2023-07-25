import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactModel = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    if (this.contactModel) {
      // Handle form submission here
    } else {
      // Form is invalid, display error messages or handle accordingly
    }
  }
}
