import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IconSpriteComponent } from './shared/icon-sprite/icon-sprite.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import Aos from 'aos';

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
export class AppComponent implements OnInit {
  title = 'portfolio2025';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  ngOnInit(): void {
    Aos.init({
      duration: 750,
      once: true,
    });
  }
}
