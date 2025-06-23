import { Component } from '@angular/core';
import { BubbleComponent } from '../../shared/ui-elements/bubble/bubble.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [BubbleComponent, ContactFormComponent, TranslatePipe],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  constructor() {}

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
