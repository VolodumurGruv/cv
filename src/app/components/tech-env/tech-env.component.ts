import { Component } from '@angular/core';
import { technicalEnvironment } from '../../config/data';
import { Data } from '../../interfaces/data.interface';
@Component({
  selector: 'app-tech-env',
  standalone: true,
  imports: [],
  templateUrl: './tech-env.component.html',
  styleUrl: './tech-env.component.scss',
})
export class TechEnvComponent {
  technicalEnvironment: Data[] = technicalEnvironment;
}
