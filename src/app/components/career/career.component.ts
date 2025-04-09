import { Component } from '@angular/core';
import { careerHistory } from '../../config/data';
import { Data } from '../../interfaces/data.interface';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  career: Data[] = careerHistory;
}
