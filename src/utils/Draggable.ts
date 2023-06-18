import Component from "./Component";
import Renderer from "./Renderer";

class DraggableComponent extends Component {
  private isDragging = false;

  constructor(element: HTMLElement, renderer: Renderer) {
    super(element, renderer);
    this.enableDragging();
  }

  private enableDragging(): void {
    this.subscribeToEvent("mousedown", () => {
      this.isDragging = true;
      this.draggingHandler();
    });
    this.subscribeToEvent("mouseup", () => (this.isDragging = false));
  }

  private draggingHandler(): void {
    this.changePosition(100, 0);
    this.renderComponent();
  }
}

export default DraggableComponent;
