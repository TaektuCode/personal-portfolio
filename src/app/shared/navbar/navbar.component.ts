import { Component } from '@angular/core';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuDialogComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isDialogVisible = false; // Steuert, ob Komponente im DOM ist
  isDialogOpen = false; // Steuert Animation (Klasse "open")

  toggleDialog(): void {
    if (this.isDialogOpen) {
      this.isDialogOpen = false;
      setTimeout(() => {
        this.isDialogVisible = false;
      }, 300); // Dauer der CSS-Transition
    } else {
      this.isDialogVisible = true;
      setTimeout(() => {
        this.isDialogOpen = true;
      }, 10); // Kurz warten, damit DOM aufgebaut ist
    }
  }

  closeDialog(): void {
    this.toggleDialog();
  }
}
