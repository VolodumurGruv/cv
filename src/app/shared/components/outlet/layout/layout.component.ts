import { Component } from '@angular/core';
import { TabsComponent } from '../../tabs/tabs.component';
import { TabComponent } from '../../tabs/tab/tab.component';
import { SummaryComponent } from '../../../../components/summary/summary.component';
import { EducationComponent } from '../../../../components/education/education.component';
import { ExperienceComponent } from '../../../../components/experience/experience.component';
import { TechEnvComponent } from '../../../../components/tech-env/tech-env.component';
import { CareerComponent } from '../../../../components/career/career.component';
import { AdditionalComponent } from '../../../../components/additional/additional.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    TabsComponent,
    TabComponent,
    SummaryComponent,
    EducationComponent,
    ExperienceComponent,
    TechEnvComponent,
    CareerComponent,
    AdditionalComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
