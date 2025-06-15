import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';

import { SkillSetSectionComponent } from './skill-set-section/skill-set-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ReviewSectionComponent } from './review-section/review-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    AboutMeSectionComponent,
    SkillSetSectionComponent,
    PortfolioSectionComponent,
    ReviewSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
