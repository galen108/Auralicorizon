import { Component, inject, signal, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { ArchitectureRegistryService } from '../../core/architecture-registry.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
})
export class AppShellComponent implements OnInit, OnDestroy {
  protected readonly registry = inject(ArchitectureRegistryService);
  private readonly breakpointObserver = inject(BreakpointObserver);

  @ViewChild('sidenav') sidenav!: MatSidenav;

  isMobile = signal(false);
  private subscription = new Subscription();

  readonly engineIcons: Record<string, string> = {
    'temporal-codex': 'timeline',
    stratatruth: 'bar_chart',
    'hybrid-synthesis': 'merge_type',
    'transitional-horizon': 'explore',
  };

  ngOnInit() {
    this.subscription.add(
      this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(state => {
        this.isMobile.set(state.matches);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeSidenavIfMobile() {
    if (this.isMobile()) {
      this.sidenav.close();
    }
  }
}
