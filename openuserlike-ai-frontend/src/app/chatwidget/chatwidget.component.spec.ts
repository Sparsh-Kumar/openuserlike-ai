import { ComponentFixture, TestBed } from '@angular/core/testing';

import ChatwidgetComponent from './chatwidget.component';

describe('ChatwidgetComponent', () => {
  let component: ChatwidgetComponent;
  let fixture: ComponentFixture<ChatwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatwidgetComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChatwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
