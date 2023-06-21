import Component from "../classes/comps/Component";
import DraggableComponent from "../classes/comps/DraggableComponent";

class VertexComp extends DraggableComponent {
  constructor(parent: Component) {
    super(document.createElement("div"), parent);
    this.getElement().id = "one";
  }
}

export default VertexComp;
