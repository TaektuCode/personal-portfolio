import { Component, Input } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';
import { CustomButtonComponent } from '../../../shared/ui-elements/custom-button/custom-button.component';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [TranslatePipe, CustomButtonComponent],
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent {
  @Input({ required: true }) nameKey!: string;
  @Input({ required: true }) descriptionKey!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) technologies!: string[];
  @Input({ required: true }) liveUrl!: string;
  @Input({ required: true }) githubUrl!: string;
}
