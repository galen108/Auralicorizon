import { Injectable } from '@angular/core';
import { ArchitectureEngine } from './models';

@Injectable({ providedIn: 'root' })
export class ArchitectureRegistryService {
  readonly engines: ArchitectureEngine[] = [
    {
      id: 'temporal-codex',
      label: 'Temporal Codex',
      route: '/temporalcodex',
      description: 'Symbolic, mythic, civilizational-cycle reasoning',
    },
    {
      id: 'stratatruth',
      label: 'StrataTruth',
      route: '/stratatruth',
      description: 'Structural, incentive, automation, institutional reasoning',
    },
    {
      id: 'hybrid-synthesis',
      label: 'Hybrid Synthesis',
      route: '/synthesis',
      description: 'Dialectical fusion of temporal and structural engines',
    },
    {
      id: 'transitional-horizon',
      label: 'Transitional Horizon',
      route: '/horizon',
      description: 'Inflection points and systemic threshold navigation',
    },
  ];
}
