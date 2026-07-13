import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { ArchitectureRegistryService } from '../core/architecture-registry.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly registry = inject(ArchitectureRegistryService);
}
