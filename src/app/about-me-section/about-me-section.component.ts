import { Component } from '@angular/core';
import { BubbleComponent } from '../ui-elements/bubble/bubble.component';
import { CustomButtonComponent } from '../ui-elements/custom-button/custom-button.component';

@Component({
  selector: 'app-about-me-section',
  imports: [BubbleComponent, CustomButtonComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})
export class AboutMeSectionComponent {}
