import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-section',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss',
})
export class PortfolioSectionComponent {}
