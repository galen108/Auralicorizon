import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { HybridSynthesisService } from '../hybrid-synthesis.service';

@Component({
  selector: 'app-hybrid-fusion',
  standalone: true,
  imports: [UpperCasePipe, MatTabsModule, MatChipsModule, MatCardModule],
  templateUrl: './hybrid-fusion.component.html',
  styleUrl: './hybrid-fusion.component.css',
})
export class HybridFusionComponent {
  protected readonly service = inject(HybridSynthesisService);

  severityClass(severity: number): string {
    if (severity >= 0.85) return 'sev-critical';
    if (severity >= 0.70) return 'sev-high';
    return 'sev-warning';
  }

  formatHorizon(year: number): string {
    return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
  }

  formatIndex(i: number): string {
    return String(i + 1).padStart(2, '0');
  }
}
