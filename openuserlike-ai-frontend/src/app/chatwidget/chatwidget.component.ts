import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatWidgetConfig } from './types';
import DataService from '../services/data.service';
import UserlikeEvents from '../events/events';

@Component({
  selector: 'app-chatwidget',
  imports: [CommonModule],
  templateUrl: './chatwidget.component.html',
  styleUrl: './chatwidget.component.css',
})
export default class ChatwidgetComponent {
  public chatBoxSubscription!: Subscription;

  @Input() chatWidgetConfig: ChatWidgetConfig = {
    isClicked: false,
    clickedInIcn: 'close',
    clickedOutIcn: 'mode_comment',
  };

  constructor(
    private readonly _dataService: DataService,
  ) { }

  public toggleWidget() {
    this._dataService.sendMsgToChatWidgetSubscribers({ eventName: UserlikeEvents.TOGGLE_CLICK });
  }
}
