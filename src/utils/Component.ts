import { Vector2 } from "./types";

class Component {
  private element: HTMLElement;
  private x: number = 200;
  private y: number = 200;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  public getPosition(): Vector2 {
    return { x: this.x, y: this.y };
  }

  public setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public changePosition(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  public getComponent(): HTMLElement {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;

    return this.element;
  }
}

export default Component;
