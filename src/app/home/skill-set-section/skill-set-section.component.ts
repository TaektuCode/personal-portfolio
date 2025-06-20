import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';
export interface Skill {
  id: number | string;
  name: string;
  iconId: string;
}

@Component({
  selector: 'app-skill-set-section',
  imports: [TranslatePipe],
  templateUrl: './skill-set-section.component.html',
  styleUrls: ['./skill-set-section.component.scss'],
})
export class SkillSetSectionComponent implements OnInit {
  public skills: Skill[] = [];
  private skillsDataUrl = 'assets/data/skills.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  private loadSkills(): void {
    this.http.get<Skill[]>(this.skillsDataUrl).subscribe({
      next: (data) => {
        this.skills = data;
        console.log('Skills erfolgreich geladen:', this.skills);
      },
      error: (error) => {
        console.error('Fehler beim Laden der Skill-Daten:', error);
      },
    });
  }
}
