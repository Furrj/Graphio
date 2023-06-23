import Component from "../classes/comps/Component";
import DraggableComponent from "../classes/comps/DraggableComponent";
import Node from "./Node";

class Vertex extends DraggableComponent {
  constructor(parent: Component) {
    super(document.createElement("div"), parent);
    this.getElement().className = "vertex";
    const nodeTop = new Node();
    const nodeBottom = new Node();
    const nodeLeft = new Node();
    const nodeRight = new Node();
    nodeTop.getElement().classList.add("top");
    nodeBottom.getElement().classList.add("bottom");
    nodeLeft.getElement().classList.add("left");
    nodeRight.getElement().classList.add("right");
    this.getElement().appendChild(nodeTop.getElement());
    this.getElement().appendChild(nodeBottom.getElement());
    this.getElement().appendChild(nodeLeft.getElement());
    this.getElement().appendChild(nodeRight.getElement());
  }
}

export default Vertex;
