import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { TemporalCodexService } from '../temporal-codex.service';

@Component({
  selector: 'app-temporal-codex-timeline',
  standalone: true,
  imports: [UpperCasePipe, MatCardModule, MatListModule, MatDividerModule],
  templateUrl: './temporal-codex-timeline.component.html',
  styleUrl: './temporal-codex-timeline.component.css',
})
export class TemporalCodexTimelineComponent {
  protected readonly service = inject(TemporalCodexService);

  formatHorizon(year: number): string {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} CE`;
  }
}
