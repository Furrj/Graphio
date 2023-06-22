import Component from "../comps/Component";
import State from "../../state/State";

class Renderer {
  private root: HTMLElement | null;
  private state: State;

  constructor(state: State) {
    this.root = document.querySelector("#root");
    this.state = state;
  }

  public render(...elements: Component[]): void {
    for (const element of elements) {
      this.root?.appendChild(element.getElement());
    }
  }
}

export default Renderer;
