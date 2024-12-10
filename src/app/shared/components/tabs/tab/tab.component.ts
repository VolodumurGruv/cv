import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  @Input() title = '';
  @Input() content: TemplateRef<any> | null = null;
  active = false;
}
