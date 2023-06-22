import Component from "../classes/comps/Component";
import DraggableComponent from "../classes/comps/DraggableComponent";

class Vertex extends DraggableComponent {
  constructor(parent: Component) {
    super(document.createElement("div"), parent);
    this.getElement().id = "one";
  }
}

export default Vertex;
