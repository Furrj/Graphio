import Component from "../classes/comps/Component";
import DraggableComponent from "../classes/comps/DraggableComponent";
import State from "../state/State";

class Vertex extends DraggableComponent {
  constructor(parent: Component, state: State) {
    super(document.createElement("div"), parent);
    this.getElement().className = "vertex";
  }
}

export default Vertex;
