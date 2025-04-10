import { Component } from '@angular/core';
import { summary } from '../../config/data';
import { Data } from '../../interfaces/data.interface';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  summary: Data[] = summary;
}
