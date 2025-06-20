import { Component } from '@angular/core';
import { BubbleComponent } from '../../shared/ui-elements/bubble/bubble.component';
import { CustomButtonComponent } from '../../shared/ui-elements/custom-button/custom-button.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-section',
  imports: [BubbleComponent, CustomButtonComponent, TranslatePipe],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})
export class AboutMeSectionComponent {}
