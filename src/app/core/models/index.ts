export interface SymbolicSignal {
  id: string;
  label: string;
  description: string;
  horizon: number;
}

export interface StructuralSignal {
  id: string;
  domain: string;
  severity: number;
  description: string;
}

export interface HybridState {
  id: string;
  symbolic: SymbolicSignal;
  structural: StructuralSignal;
  synthesis: string;
}

export interface CivilizationalPhase {
  phase: string;
  range: string;
  signal: string;
}

export interface MythicDiagnostic {
  id: string;
  label: string;
  value: number;
  status: 'critical' | 'warning' | 'nominal';
}

export interface AutomationIndicator {
  sector: string;
  automationRate: number;
  displacementIndex: number;
}

export interface DialecticalMapping {
  thesis: string;
  antithesis: string;
  synthesis: string;
}

export interface TransitionalThreshold {
  id: string;
  label: string;
  year: number;
  probability: number;
  status: 'approaching' | 'critical' | 'uncertain' | 'speculative';
}

export interface ArchitectureEngine {
  id: string;
  label: string;
  route: string;
  description: string;
}
