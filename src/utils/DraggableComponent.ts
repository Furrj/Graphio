import Component from "./Component";
import Renderer from "./Renderer";
import Dragger from "./Dragger";
import { Vector2 } from "./types";

class DraggableComponent extends Component {
  private isDragging: boolean = false;
  private dragger: Dragger;
  private mouseDownEventWindow: MouseEvent | null = null;
  private mouseMoveEventWindow: MouseEvent | null = null;

  constructor(element: HTMLElement, renderer: Renderer) {
    super(element, renderer);
    this.dragger = new Dragger();
    this.enableDragging();
  }

  private enableDragging(): void {
    this.subscribeToEvent("mousedown", () => this.onMouseDown());
    this.subscribeToEvent("mousemove", () => this.draggingHandler());

    window.addEventListener("mousedown", (event) => {
      if (event) {
        this.getMouseDownEventWindow(event);
      }
    });

    window.addEventListener("mousemove", (event) => {
      if (event) {
        this.getMouseMoveEventWindow(event);
      }
    });

    window.addEventListener("mouseup", () => (this.isDragging = false));
  }

  private onMouseDown(): void {
    this.isDragging = true;
    console.log(this.dragger.getInitialPosition(this.mouseDownEventWindow));
  }

  private draggingHandler(): void {
    if (this.isDragging) {
      console.log(this.mouseMoveEventWindow?.clientX);
    } else return;
  }

  private getMouseDownEventWindow(event: MouseEvent) {
    this.mouseDownEventWindow = event;
  }

  private getMouseMoveEventWindow(event: MouseEvent) {
    this.mouseMoveEventWindow = event;
  }
}

export default DraggableComponent;
