export type LooseObject = {
  [key: string]: any;
};

export type SocketMessage = {
  event: string;
  payload: LooseObject;
};
