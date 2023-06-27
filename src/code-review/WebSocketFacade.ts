type UserEvent = 'CONFERENCE_CREATION' | 'CONFERENCE_INVITATION';

interface WebSocketPayload {
  type: UserEvent
}

type ListenerFn = <TResponse>(response: TResponse) => void

type WebSocketEvent = UserEvent | "open" | "close" | "error"

export class WebSocketFacade {
  private client: WebSocket
  private subscribers = new Map<WebSocketEvent, ListenerFn[]>()

  constructor(private url: string) {
    this.client = new WebSocket(this.url)
    this.initialize()
  }

  send<T extends WebSocketPayload>(request: T) {
    const payload = JSON.stringify(request)
    this.client.send(payload)
  }

  subscribe(eventType: WebSocketEvent, listener: ListenerFn) {
    const listeners = this.subscribers.get(eventType)
    if (!listeners) {
      this.subscribers.set(eventType, [listener])
    } else {
      this.subscribers.set(eventType, [...listeners, listener])
    }
  }

  close() {
    this.client.close()
  }

  private initialize() {
    this.client.addEventListener("open", (e) => this.callListeners("open", e))
    this.client.addEventListener("close", (e) => this.callListeners("close", e))
    this.client.addEventListener("error", (e) => this.callListeners("error", e))

    this.client.addEventListener("message", (e) => {
      const parsed: WebSocketPayload = JSON.parse(e.data)
      this.callListeners(parsed.type, parsed)
    })
  }

  private callListeners(type: WebSocketEvent, event: any) {
    const listeners = this.subscribers.get(type)
    if (!listeners) return;

    listeners.forEach((fn) => fn(event))
  }
}
