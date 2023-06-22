import Component from "./Component";
import { Vector2 } from "../../utils/types";

class DraggableComponent extends Component {
  private initalPosition: Vector2 = { x: 0, y: 0 };
  private currentPosition: Vector2 = { x: 0, y: 0 };
  private offset: Vector2 = { x: 0, y: 0 };
  private isDragging: boolean = false;
  private parent: Component;

  constructor(element: HTMLElement, parent: Component) {
    super(element);
    this.parent = parent;
    this.enableDragging();
  }

  public setParent(parent: Component) {
    this.parent = parent;
  }

  public getCurrentPosition(): Vector2 {
    return this.currentPosition;
  }

  private enableDragging(): void {
    this.parent
      .getElement()
      .addEventListener("mousedown", (event) => this.dragStart(event));
    this.parent
      .getElement()
      .addEventListener("mouseup", (event) => this.dragEnd(event));
    this.parent
      .getElement()
      .addEventListener("mousemove", (event) => this.drag(event));
  }

  private dragStart(event: MouseEvent): void {
    if (event) {
      this.initalPosition = {
        x: event.clientX - this.offset.x,
        y: event.clientY - this.offset.y,
      };

      if (event.target === this.getElement()) {
        this.isDragging = true;
      }
    }
  }

  private drag(event: MouseEvent): void {
    if (this.isDragging && event) {
      event.preventDefault();

      this.currentPosition = {
        x: event.clientX - this.initalPosition.x,
        y: event.clientY - this.initalPosition.y,
      };

      this.offset = {
        x: this.currentPosition.x,
        y: this.currentPosition.y,
      };

      this.getElement().style.transform =
        "translate3d(" +
        this.currentPosition.x +
        "px, " +
        this.currentPosition.y +
        "px, 0)";
    }
  }

  private dragEnd(event: MouseEvent): void {
    if (event) {
      this.initalPosition = {
        x: this.currentPosition.x,
        y: this.currentPosition.y,
      };

      this.isDragging = false;
    }
  }
}

export default DraggableComponent;
