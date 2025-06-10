import { Component } from '@angular/core';
import { BubbleComponent } from '../ui-elements/bubble/bubble.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact-section',
  imports: [BubbleComponent, ContactFormComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {}
