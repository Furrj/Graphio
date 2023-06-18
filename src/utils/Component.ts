import { Vector2 } from "./types";
import Renderer from "./Renderer";

class Component {
  private element: HTMLElement;
  private x: number = 200;
  private y: number = 200;
  private renderer: Renderer;

  constructor(element: HTMLElement, renderer: Renderer) {
    this.element = element;
    this.renderer = renderer;
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

  public subscribeToEvent(
    eventType: string,
    callback: (event: any) => void
  ): void {
    this.element.addEventListener(eventType, callback);
  }

  public getComponent(): HTMLElement {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;

    return this.element;
  }

  public renderComponent() {
    this.renderer.render(this);
  }
}

export default Component;
