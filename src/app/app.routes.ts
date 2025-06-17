import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Die neue HomeComponent importieren
import { LegalNoticeComponent } from './leagal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  //Leitet alle unbekannten URLs auf die Hauptseite um.
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
