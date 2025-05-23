import { Component } from '@angular/core';
import { BubbleComponent } from '../ui-elements/bubble/bubble.component';

@Component({
  selector: 'app-about-me-section',
  imports: [BubbleComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})
export class AboutMeSectionComponent {}
