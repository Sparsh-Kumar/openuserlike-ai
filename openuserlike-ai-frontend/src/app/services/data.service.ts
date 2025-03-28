import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LooseObject } from './types';

@Injectable({
  providedIn: 'root',
})
export default class DataService {
  private chatBoxMsgSource = new BehaviorSubject<LooseObject>({});

  public chatBoxMsg$ = this.chatBoxMsgSource.asObservable();

  private chatWidgetMsgSource = new BehaviorSubject<LooseObject>({});

  public chatWidgetMsg$ = this.chatWidgetMsgSource.asObservable();

  public sendMsgToChatBoxSubscribers(payload: LooseObject = {}) {
    this.chatBoxMsgSource.next(payload);
  }

  public sendMsgToChatWidgetSubscribers(payload: LooseObject = {}) {
    this.chatWidgetMsgSource.next(payload);
  }
}
