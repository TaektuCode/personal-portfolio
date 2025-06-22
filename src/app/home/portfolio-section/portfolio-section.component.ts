import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectViewComponent } from './project-view/project-view.component';
import { BubbleComponent } from '../../shared/ui-elements/bubble/bubble.component';

export interface Project {
  id: number | string;
  nameKey: string;
  descriptionKey: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [TranslatePipe, ProjectViewComponent, BubbleComponent],
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent implements OnInit {
  public projects: Project[] = [];
  private projectsDataUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Project[]>(this.projectsDataUrl).subscribe((data) => {
      this.projects = data;
    });
  }
}
