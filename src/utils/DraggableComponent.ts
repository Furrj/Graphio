import Component from "./Component";
import Renderer from "./Renderer";
import { Vector2 } from "./types";

class DraggableComponent extends Component {
  private initalPosition: Vector2 = { x: -1, y: -1 };
  private currentPosition: Vector2 = { x: -1, y: -1 };

  constructor(element: HTMLElement, renderer: Renderer) {
    super(element, renderer);
    this.enableDragging();
  }

  private enableDragging(): void {
    this.getComponent().draggable = true;
    this.subscribeToEvent("dragstart", this.handleDragStart);
    this.subscribeToEvent("drop", this.handleDrop);
    window.addEventListener("dragover", this.handleDragOver);
  }

  private handleDragStart(event: DragEvent) {
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
    }
  }

  private handleDrop(event: DragEvent) {
    event.stopPropagation();
    console.log(event.screenX);
    return false;
  }

  private handleDragOver(event: DragEvent) {
    event.preventDefault();
    return false;
  }
}

export default DraggableComponent;
