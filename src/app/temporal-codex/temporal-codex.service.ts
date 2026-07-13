import { Injectable } from '@angular/core';
import {
  SymbolicSignal,
  CivilizationalPhase,
  MythicDiagnostic,
} from '../core/models';

@Injectable({ providedIn: 'root' })
export class TemporalCodexService {
  readonly symbolicHorizons: SymbolicSignal[] = [
    {
      id: 'sh-1',
      label: 'Archaic Threshold',
      description: 'Pre-institutional mythic origin point. Undifferentiated symbolic field.',
      horizon: -6000,
    },
    {
      id: 'sh-2',
      label: 'Axial Age Rupture',
      description: 'Simultaneous civilizational awakening across independent nodes. 800–200 BCE.',
      horizon: -800,
    },
    {
      id: 'sh-3',
      label: 'Imperial Calcification',
      description: 'Symbolic order crystallizes into permanent hierarchy. Opacity accumulates.',
      horizon: 200,
    },
    {
      id: 'sh-4',
      label: 'Industrial Inversion',
      description: 'Mechanization displaces mythic substrate. Structural logic dominates.',
      horizon: 1800,
    },
    {
      id: 'sh-5',
      label: 'Synthetic Collapse',
      description: 'AI/automation horizon disrupts institutional ground. Dual-axis destabilization.',
      horizon: 2025,
    },
    {
      id: 'sh-6',
      label: 'Post-Structural Threshold',
      description: 'Dialectical resolution or irreversible dissolution. Horizon: 2100 CE.',
      horizon: 2100,
    },
  ];

  readonly civilizationalCyclePatterns: CivilizationalPhase[] = [
    {
      phase: 'Genesis',
      range: '6000 BCE – 3000 BCE',
      signal: 'Mythic integration, undifferentiated symbolic order',
    },
    {
      phase: 'Expansion',
      range: '3000 BCE – 500 BCE',
      signal: 'Institutional formation, symbolic codification',
    },
    {
      phase: 'Axial',
      range: '800 BCE – 200 CE',
      signal: 'Reflexive consciousness, competing symbolic systems',
    },
    {
      phase: 'Imperial',
      range: '200 CE – 1500 CE',
      signal: 'Hierarchical crystallization, opacity accumulation',
    },
    {
      phase: 'Industrial',
      range: '1500 CE – 2000 CE',
      signal: 'Structural acceleration, mythic substrate erosion',
    },
    {
      phase: 'Synthetic',
      range: '2000 CE – 2100 CE',
      signal: 'Hybrid synthesis or catastrophic collapse',
    },
  ];

  readonly mythicDiagnosticSignals: MythicDiagnostic[] = [
    {
      id: 'mds-1',
      label: 'Symbolic Coherence Index',
      value: 0.34,
      status: 'critical',
    },
    {
      id: 'mds-2',
      label: 'Mythic Integration Depth',
      value: 0.12,
      status: 'critical',
    },
    {
      id: 'mds-3',
      label: 'Civilizational Horizon Clarity',
      value: 0.51,
      status: 'warning',
    },
    {
      id: 'mds-4',
      label: 'Narrative Load Capacity',
      value: 0.28,
      status: 'critical',
    },
  ];
}
