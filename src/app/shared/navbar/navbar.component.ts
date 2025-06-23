import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import {
  TranslatePipe,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenuDialogComponent, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public useAlternateLogoColor = false;
  private routerSubscription!: Subscription;

  public currentLang: string;
  private langChangeSubscription!: Subscription;

  public isDialogVisible = false;
  public isDialogOpen = false;

  constructor(private router: Router, public translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang;
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const darkLogoPages = ['/legal-notice', '/privacy-policy'];
        this.useAlternateLogoColor = darkLogoPages.includes(
          event.urlAfterRedirects
        );
      });

    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.currentLang = event.lang;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  toggleDialog(): void {
    if (this.isDialogOpen) {
      this.isDialogOpen = false;
      setTimeout(() => {
        this.isDialogVisible = false;
      }, 300);
    } else {
      this.isDialogVisible = true;
      setTimeout(() => {
        this.isDialogOpen = true;
      }, 10);
    }
  }

  closeDialog(): void {
    this.toggleDialog();
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

  isLanguageActive(lang: string): boolean {
    return this.currentLang === lang;
  }
}
