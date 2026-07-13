import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { HybridSynthesisService } from '../hybrid-synthesis.service';
import { TransitionalThreshold } from '../../core/models';

@Component({
  selector: 'app-transitional-horizon',
  standalone: true,
  imports: [UpperCasePipe, MatStepperModule, MatCardModule],
  templateUrl: './transitional-horizon.component.html',
  styleUrl: './transitional-horizon.component.css',
})
export class TransitionalHorizonComponent {
  protected readonly service = inject(HybridSynthesisService);

  statusClass(status: TransitionalThreshold['status']): string {
    const map: Record<string, string> = {
      approaching: 'severity-warning',
      critical: 'severity-critical',
      uncertain: 'severity-uncertain',
      speculative: 'severity-speculative',
    };
    return map[status] ?? '';
  }

  probabilityBar(probability: number): number {
    return Math.round(probability * 100);
  }
}
