import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsHotPageComponent } from './whats-hot-page.component';

describe('WhatsHotPageComponent', () => {
  let component: WhatsHotPageComponent;
  let fixture: ComponentFixture<WhatsHotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsHotPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsHotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
