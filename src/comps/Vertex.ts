import Component from "../classes/comps/Component";
import DraggableComponent from "../classes/comps/DraggableComponent";
import Node from "./Node";

class Vertex extends DraggableComponent {
  constructor(parent: Component) {
    super(document.createElement("div"), parent);
    this.getElement().className = "vertex";
    const nodeTop = new Node();
    const nodeBottom = new Node();
    nodeTop.getElement().classList.add("top");
    nodeBottom.getElement().classList.add("bottom");
    this.getElement().appendChild(nodeTop.getElement());
    this.getElement().appendChild(nodeBottom.getElement());
  }
}

export default Vertex;
