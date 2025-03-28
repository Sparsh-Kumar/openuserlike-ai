import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { LooseObject } from '../types';
import { ServerEvents, ClientEvents } from './events';

@WebSocketGateway({
  namespace: 'events',
  cors: {
    origin: '*',
    credentials: true,
  },
})
export default class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly msg: string = 'Message';

  private readonly broadcastMsg: string = 'Broadcast Message';

  @WebSocketServer() private readonly server: Server;

  @SubscribeMessage(ServerEvents.MESSAGE)
  public handleMessage(client: Socket, payload: LooseObject): void {
    client.emit(ClientEvents.MESSAGE_REPLY, {
      msg: this.msg,
    });
    this.server.emit(ClientEvents.BROADCAST_REPLY, {
      msg: this.broadcastMsg,
    });
  }

  public handleConnection(client: Socket): void {
    console.log(`New user connected with socket.io Id = ${client?.id || ''}`);
    console.log(this);
  }

  public handleDisconnect(client: Socket): void {
    console.log(`User disconnected with socket.io Id = ${client?.id || ''}`);
    console.log(this);
  }
}
