import { NgTemplateOutlet } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  inject,
  Input,
  input,
  OnChanges,
  OnDestroy,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements AfterViewInit, OnDestroy {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  @ViewChild('tabContentContainer', { read: ViewContainerRef })
  tabContentContainer!: ViewContainerRef;

  timeoutId!: ReturnType<typeof setTimeout>;
  ngAfterViewInit(): void {
    this.timeoutId = setTimeout(() => this.selectTab(0), 0);
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  selectTab(i: number) {
    const tabsArray = this.tabs.toArray();
    const activeTab = tabsArray[i];

    tabsArray.forEach((tab, idx) => {
      tab.active = idx === i;
    });

    if (this.tabContentContainer) {
      this.tabContentContainer.clear();

      if (activeTab?.content) {
        this.tabContentContainer.createEmbeddedView(activeTab.content);
      }
    }
  }
}
