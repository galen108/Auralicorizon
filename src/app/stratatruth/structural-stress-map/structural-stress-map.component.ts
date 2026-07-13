import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { StrataTruthService } from '../stratatruth.service';

@Component({
  selector: 'app-structural-stress-map',
  standalone: true,
  imports: [MatTableModule, MatExpansionModule, MatCardModule],
  templateUrl: './structural-stress-map.component.html',
  styleUrl: './structural-stress-map.component.css',
})
export class StructuralStressMapComponent {
  protected readonly service = inject(StrataTruthService);

  readonly signalColumns = ['domain', 'severity', 'description'];

  severityClass(severity: number): string {
    if (severity >= 0.85) return 'severity-critical';
    if (severity >= 0.70) return 'severity-high';
    return 'severity-warning';
  }

  severityLabel(severity: number): string {
    if (severity >= 0.85) return 'CRITICAL';
    if (severity >= 0.70) return 'HIGH';
    return 'ELEVATED';
  }
}
