import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonSize = 'small' | 'normal' | 'medium' | 'large';
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'third'
  | 'inactive'
  | 'active';

@Component({
  selector: 'app-custom-button',
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() size!: ButtonSize;
  @Input() color!: ButtonColor;
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<void>();

  public get classes(): string[] {
    return [
      'custom-button',
      `custom-button--${this.size}`,
      `custom-button--${this.color}`,
    ];
  }

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
