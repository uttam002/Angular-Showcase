import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  feedback = {
    name: '',
    email: '',
    message: ''
  };

  submitFeedback() {
    console.log('Feedback submitted:', this.feedback);
    alert('Thank you for your feedback!');
    this.feedback = { name: '', email: '', message: '' }; // Reset form
  }
}
