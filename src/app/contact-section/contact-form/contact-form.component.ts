import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomButtonComponent } from '../../ui-elements/custom-button/custom-button.component';
// CommonModule wird nicht mehr benötigt

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, // WICHTIG für Reactive Forms, muss bleiben
    CustomButtonComponent, // Ihr benutzerdefinierter Button
    // CommonModule hier entfernt
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulardaten:', this.contactForm.value);
      alert('Nachricht gesendet! (Dies ist nur eine Demo)');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
      console.log('Formular ist ungültig.');
    }
  }
}
