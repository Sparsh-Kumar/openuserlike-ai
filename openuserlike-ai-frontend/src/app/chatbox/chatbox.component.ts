import { Component, Input } from '@angular/core';
import { ChatBoxConfig } from './types';
import DataService from '../services/data.service';
import UserlikeEvents from '../events/events';

@Component({
  selector: 'app-chatbox',
  imports: [],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css',
})
export default class ChatboxComponent {
  @Input() chatBoxConfig: ChatBoxConfig = {
    chatBoxHeading: '',
    btnIcnTop: '',
    btnIcnChatBox: '',
    sendBtnIcn: '',
    chatBoxIncomingPara: '',
    chatBoxOutgoingPara: '',
  };

  constructor(
    private readonly _dataService: DataService,
  ) { }

  public closeChatBox() {
    this._dataService.sendMsgToChatBoxSubscribers({ eventName: UserlikeEvents.CLOSE_CHATBOX });
  }
}
