import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { BubbleComponent } from '../ui-elements/bubble/bubble.component';

@Component({
  selector: 'app-hero-section',
  imports: [TranslatePipe, TranslateDirective, BubbleComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  name = 'Alex';
}
