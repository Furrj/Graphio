import DraggableComponent from "../classes/comps/DraggableComponent";

class VertexComp extends DraggableComponent {
  constructor() {
    super(document.createElement("div"));
    this.getElement().id = "one";
  }
}

export default VertexComp;
