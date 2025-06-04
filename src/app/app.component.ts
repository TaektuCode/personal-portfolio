import { Component } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { IconSpriteComponent } from './icon-sprite/icon-sprite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillSetSectionComponent } from './skill-set-section/skill-set-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IconSpriteComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutMeSectionComponent,
    SkillSetSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
  title = 'portfolio2025';
}
