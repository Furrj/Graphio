import Component from "../classes/comps/Component";

class Node extends Component {
  constructor() {
    super(document.createElement("div"));
    this.getElement().className = "node";
  }
}

export default Node;
