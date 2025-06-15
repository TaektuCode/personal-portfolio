import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Die neue HomeComponent importieren
import { LeagalNoticeComponent } from './leagal-notice/leagal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal-notice', component: LeagalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  //Leitet alle unbekannten URLs auf die Hauptseite um.
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
