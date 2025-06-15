import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-review-card',
  imports: [
    TranslatePipe, // TranslatePipe hier importieren, damit sie im Template verfügbar ist
  ],
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  // Annahme: reviewerName wird direkt angezeigt oder ist bereits ein Schlüssel, der außerhalb übersetzt wird.
  // Falls reviewerName auch übersetzt werden soll, müsste es auch ein Key sein.
  @Input({ required: true }) reviewerName!: string;

  // Diese Inputs erwarten jetzt Übersetzungsschlüssel statt direktem Text
  @Input({ required: true }) projectKey!: string;
  @Input({ required: true }) reviewTextKey!: string;

  constructor() {}
}
