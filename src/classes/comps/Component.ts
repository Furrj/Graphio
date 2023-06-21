class Component {
  private element: HTMLElement;
  private id: string;

  constructor(element: HTMLElement) {
    this.element = element;
    this.id = element.id;
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public setElement(element: HTMLElement): void {
    element.id = this.id;
    this.element = element;
  }
}

export default Component;
