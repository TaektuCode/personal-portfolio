import { Component, OnInit, OnDestroy } from '@angular/core'; // OnDestroy für Best Practice
import { HttpClient } from '@angular/common/http';

import { ReviewCardComponent } from './review-card/review-card.component';
import { Subscription } from 'rxjs'; // Für das Abmelden der Subscription

// Interface für die Struktur der Daten in Ihrer reviews.json
export interface ReviewData {
  id: number | string;
  reviewerName: string;
  projectKey: string;
  reviewTextKey: string;
}

@Component({
  selector: 'app-review-section',
  standalone: true,
  imports: [
    ReviewCardComponent, // Nur die tatsächlich im Template verwendeten Komponenten/Pipes/Direktiven
  ],
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss'],
})
export class ReviewSectionComponent implements OnInit, OnDestroy {
  public reviews: ReviewData[] = [];
  private reviewsDataUrl = 'assets/data/reviews.json';
  private reviewsSubscription!: Subscription; // Zum Speichern der Subscription

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  private loadReviews(): void {
    this.reviewsSubscription = this.http
      .get<ReviewData[]>(this.reviewsDataUrl)
      .subscribe({
        next: (data) => {
          this.reviews = data;
          console.log('Review-Daten (mit Schlüsseln) geladen:', this.reviews);
        },
        error: (error) => {
          console.error('Fehler beim Laden der Review-Daten:', error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.reviewsSubscription) {
      this.reviewsSubscription.unsubscribe(); // Von der HTTP-Subscription abmelden
    }
  }
}
