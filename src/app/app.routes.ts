import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'temporalcodex', pathMatch: 'full' },
  {
    path: 'temporalcodex',
    loadComponent: () =>
      import('./temporal-codex/temporal-codex-timeline/temporal-codex-timeline.component').then(
        (m) => m.TemporalCodexTimelineComponent,
      ),
  },
  {
    path: 'stratatruth',
    loadComponent: () =>
      import('./stratatruth/structural-stress-map/structural-stress-map.component').then(
        (m) => m.StructuralStressMapComponent,
      ),
  },
  {
    path: 'synthesis',
    loadComponent: () =>
      import('./hybrid-synthesis/hybrid-fusion/hybrid-fusion.component').then(
        (m) => m.HybridFusionComponent,
      ),
  },
  {
    path: 'horizon',
    loadComponent: () =>
      import('./hybrid-synthesis/transitional-horizon/transitional-horizon.component').then(
        (m) => m.TransitionalHorizonComponent,
      ),
  },
];
