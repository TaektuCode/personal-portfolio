import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReviewCardComponent } from './review-card/review-card.component';
import { Subscription } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

export interface ReviewData {
  id: number | string;
  reviewerName: string;
  projectKey: string;
  reviewTextKey: string;
}

@Component({
  selector: 'app-review-section',
  standalone: true,
  imports: [ReviewCardComponent, TranslatePipe],
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss'],
})
export class ReviewSectionComponent implements OnInit, OnDestroy {
  public reviews: ReviewData[] = [];
  private reviewsDataUrl = 'assets/data/reviews.json';
  private reviewsSubscription!: Subscription;
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
        },
      });
  }

  ngOnDestroy(): void {
    if (this.reviewsSubscription) {
      this.reviewsSubscription.unsubscribe();
    }
  }
}
