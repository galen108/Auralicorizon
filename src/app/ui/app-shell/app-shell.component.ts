import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
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
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
})
export class AppShellComponent {
  protected readonly registry = inject(ArchitectureRegistryService);

  readonly engineIcons: Record<string, string> = {
    'temporal-codex': 'timeline',
    stratatruth: 'bar_chart',
    'hybrid-synthesis': 'merge_type',
    'transitional-horizon': 'explore',
  };
}
