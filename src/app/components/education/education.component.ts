import { Component } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { education } from '../../config/data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  education: Data[] = education;
}
