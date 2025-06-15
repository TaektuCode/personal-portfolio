import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
