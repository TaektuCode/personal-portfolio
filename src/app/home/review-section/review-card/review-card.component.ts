import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-review-card',
  imports: [TranslatePipe],
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  @Input({ required: true }) reviewerName!: string;
  @Input({ required: true }) projectKey!: string;
  @Input({ required: true }) reviewTextKey!: string;

  constructor() {}
}
