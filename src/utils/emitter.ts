export function handleAndEmit(emitter: Function, event: string, eventHandler: Function, ...args: any): void {
  eventHandler();
  emitter(event, ...args);
}
