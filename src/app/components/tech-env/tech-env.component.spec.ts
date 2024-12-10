import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechEnvComponent } from './tech-env.component';

describe('TechEnvComponent', () => {
  let component: TechEnvComponent;
  let fixture: ComponentFixture<TechEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechEnvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
