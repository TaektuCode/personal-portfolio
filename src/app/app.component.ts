import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import { IconSpriteComponent } from './shared/icon-sprite/icon-sprite.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IconSpriteComponent,
    NavbarComponent,
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
