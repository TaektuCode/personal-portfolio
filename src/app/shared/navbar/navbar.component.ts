import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenuDialogComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isOnLegalPage = false;
  private routerSubscription!: Subscription;

  public isDialogVisible = false;
  public isDialogOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isOnLegalPage = event.urlAfterRedirects === '/legal-notice';
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  toggleDialog(): void {
    if (this.isDialogOpen) {
      this.isDialogOpen = false;
      setTimeout(() => {
        this.isDialogVisible = false;
      }, 300);
    } else {
      this.isDialogVisible = true;
      setTimeout(() => {
        this.isDialogOpen = true;
      }, 10);
    }
  }

  closeDialog(): void {
    this.toggleDialog();
  }
}
