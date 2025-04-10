import { Component } from '@angular/core';
import { someProjects } from '../../config/data';
import { Data } from '../../interfaces/data.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  projects: Data[] = someProjects;
}
