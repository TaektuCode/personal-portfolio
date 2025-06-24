import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomButtonComponent } from '../../../shared/ui-elements/custom-button/custom-button.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import emailjs from '@emailjs/browser';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CustomButtonComponent,
    TranslatePipe,
    TranslateDirective,
    CommonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submissionStatus: 'success' | 'error' | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, Validators.requiredTrue],
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
  get privacy() {
    return this.contactForm.get('privacy');
  }
  public get showNameRequiredError(): boolean {
    return !!(
      this.name?.invalid &&
      (this.name?.dirty || this.name?.touched) &&
      this.name.errors?.['required']
    );
  }
  public get showEmailRequiredError(): boolean {
    return !!(
      this.email?.invalid &&
      (this.email?.dirty || this.email?.touched) &&
      this.email.errors?.['required']
    );
  }
  public get showEmailInvalidError(): boolean {
    return !!(
      this.email?.invalid &&
      (this.email?.dirty || this.email?.touched) &&
      this.email.errors?.['email']
    );
  }
  public get showMessageRequiredError(): boolean {
    return !!(
      this.message?.invalid &&
      (this.message?.dirty || this.message?.touched) &&
      this.message.errors?.['required']
    );
  }
  public get showMessageMinLengthError(): boolean {
    return !!(
      this.message?.invalid &&
      (this.message?.dirty || this.message?.touched) &&
      this.message.errors?.['minlength']
    );
  }
  public get showPrivacyError(): boolean {
    return !!(this.privacy?.invalid && this.privacy?.touched);
  }
  public get messageRequiredLength(): number {
    return this.message?.errors?.['minlength']?.requiredLength || 0;
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submissionStatus = null;

      emailjs
        .send(
          environment.emailjs.serviceId,
          environment.emailjs.templateId,
          this.contactForm.value,
          { publicKey: environment.emailjs.publicKey }
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.submissionStatus = 'success';
            this.contactForm.reset();
            this.isSubmitting = false;
            setTimeout(() => {
              this.submissionStatus = null;
            }, 3000);
          },
          (error) => {
            console.error('FAILED...', error);
            this.submissionStatus = 'error';
            this.isSubmitting = false;
            setTimeout(() => {
              this.submissionStatus = null;
            }, 3000);
          }
        );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
