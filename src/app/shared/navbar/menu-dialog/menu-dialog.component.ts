import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
  LangChangeEvent,
} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-dialog',
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss'], //
})
export class MenuDialogComponent implements OnInit, OnDestroy {
  @Output() closeDialogEvent = new EventEmitter<void>();
  @Input() isOpen = false;

  currentLang: string;
  private langChangeSubscription!: Subscription;

  constructor(public translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang;
  }

  ngOnInit(): void {
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.currentLang = event.lang;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  onCloseButtonClick(): void {
    this.closeDialogEvent.emit();
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

  isLanguageActive(lang: string): boolean {
    return this.currentLang === lang;
  }
}
