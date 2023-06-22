import Component from "../classes/comps/Component";
import State from "../state/State";
import Vertex from "./Vertex";

class SpawnButton extends Component {
  constructor(state: State) {
    super(document.createElement("div"));
    this.getElement().id = "btn";
    this.getElement().addEventListener("click", () => state.spawnVertex());
    state.getRenderer().getApp().addChild(this);
  }
}

export default SpawnButton;
