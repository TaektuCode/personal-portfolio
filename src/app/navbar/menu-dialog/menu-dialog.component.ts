import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-dialog',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss'],
})
export class MenuDialogComponent {
  @Output() closeDialogEvent = new EventEmitter<void>();

  @Input() isOpen = false;

  onCloseButtonClick(): void {
    this.closeDialogEvent.emit();
  }
}
