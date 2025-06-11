import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomButtonComponent } from '../../ui-elements/custom-button/custom-button.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CustomButtonComponent,
    TranslatePipe,
    TranslateDirective,
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
      privacy: [false, Validators.requiredTrue],
    });
  }

  // --- Getter für Formular-Controls ---
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

  // === NEU: Getter für jeden einzelnen Fehlerstatus ===
  // Diese Methoden kapseln die komplette Logik und geben nur `true` oder `false` zurück.
  // Das Template wird dadurch extrem einfach und typsicher.

  public get showNameRequiredError(): boolean {
    const control = this.name;
    // Die !! wandeln das Ergebnis sicher in einen echten boolean (true/false) um.
    return !!(
      control?.invalid &&
      (control?.dirty || control?.touched) &&
      control.errors?.['required']
    );
  }

  public get showEmailRequiredError(): boolean {
    const control = this.email;
    return !!(
      control?.invalid &&
      (control?.dirty || control?.touched) &&
      control.errors?.['required']
    );
  }

  public get showEmailInvalidError(): boolean {
    const control = this.email;
    return !!(
      control?.invalid &&
      (control?.dirty || control?.touched) &&
      control.errors?.['email']
    );
  }

  public get showMessageRequiredError(): boolean {
    const control = this.message;
    return !!(
      control?.invalid &&
      (control?.dirty || control?.touched) &&
      control.errors?.['required']
    );
  }

  public get showMessageMinLengthError(): boolean {
    const control = this.message;
    return !!(
      control?.invalid &&
      (control?.dirty || control?.touched) &&
      control.errors?.['minlength']
    );
  }

  public get showPrivacyError(): boolean {
    const control = this.privacy;
    return !!(control?.invalid && control?.touched);
  }

  // Dieser Getter bleibt nützlich, um die Zahl für die Übersetzung bereitzustellen.
  public get messageRequiredLength(): number {
    // Gibt die 'requiredLength' zurück oder 0 als sicheren Fallback.
    return this.message?.errors?.['minlength']?.requiredLength || 0;
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
