import { Injectable } from '@angular/core';
import { StructuralSignal, AutomationIndicator } from '../core/models';

@Injectable({ providedIn: 'root' })
export class StrataTruthService {
  readonly structuralSignals: StructuralSignal[] = [
    {
      id: 'ss-1',
      domain: 'Labor Automation',
      severity: 0.87,
      description:
        'Automation displacement index exceeds institutional absorptive capacity',
    },
    {
      id: 'ss-2',
      domain: 'Wealth Opacity',
      severity: 0.91,
      description:
        'Capital concentration renders incentive structures illegible to participants',
    },
    {
      id: 'ss-3',
      domain: 'Proto-Caste Formation',
      severity: 0.74,
      description:
        'Credential-based stratification calcifying into hereditary lock-in patterns',
    },
    {
      id: 'ss-4',
      domain: 'Institutional Inertia',
      severity: 0.68,
      description:
        'Regulatory frameworks lag structural transformation by 40+ years',
    },
    {
      id: 'ss-5',
      domain: 'Incentive Misalignment',
      severity: 0.82,
      description:
        'Short-horizon optimization overrides systemic stability constraints',
    },
  ];

  readonly automationCollapseIndicators: AutomationIndicator[] = [
    { sector: 'Manufacturing', automationRate: 0.78, displacementIndex: 0.65 },
    { sector: 'Transportation', automationRate: 0.61, displacementIndex: 0.54 },
    { sector: 'Administrative', automationRate: 0.83, displacementIndex: 0.71 },
    {
      sector: 'Professional Services',
      automationRate: 0.44,
      displacementIndex: 0.38,
    },
    {
      sector: 'Creative / Cognitive',
      automationRate: 0.52,
      displacementIndex: 0.47,
    },
  ];

  readonly opacityDiagnostics = [
    {
      domain: 'Ownership Transparency',
      opacityScore: 0.88,
      note: 'Beneficial ownership obfuscated via multi-layer shell structures',
    },
    {
      domain: 'Wage-Setting Mechanisms',
      opacityScore: 0.72,
      note: 'Algorithmic wage floors suppress collective bargaining visibility',
    },
    {
      domain: 'Proto-Caste Indicators',
      opacityScore: 0.79,
      note: 'Credential signals function as hereditary proxies across generations',
    },
  ];
}
