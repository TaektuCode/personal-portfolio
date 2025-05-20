import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent {
  @Input({ required: true }) top!: string;
  @Input({ required: true }) left!: string;
  @Input({ required: true }) width!: string;
  @Input({ required: true }) height!: string;
}
