import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Die neue HomeComponent importieren
import { LeagalNoticeComponent } from './leagal-notice/leagal-notice.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal-notice', component: LeagalNoticeComponent },
  //Leitet alle unbekannten URLs auf die Hauptseite um.
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
