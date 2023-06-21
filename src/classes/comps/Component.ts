class Component {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  public subscribeToEvent(
    eventType: string,
    callback: (event: any) => void
  ): void {
    this.element.addEventListener(eventType, callback);
  }

  public addChild(child: Component): void {
    this.element.appendChild(child.getComponent());
  }

  public getComponent(): HTMLElement {
    return this.element;
  }
}

export default Component;
