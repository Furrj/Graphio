import State from "../../state/State";

class Component {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  public getElement(): HTMLElement {
    return this.element;
  }
}

export default Component;
