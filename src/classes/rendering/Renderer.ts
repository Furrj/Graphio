import Component from "../comps/Component";
import State from "../../state/State";
import App from "../../comps/App";

class Renderer {
  private root: HTMLElement | null;
  private state: State;
  private app: App;

  constructor(state: State) {
    this.root = document.querySelector("#root");
    this.state = state;
    this.app = new App();
  }

  public getApp(): App {
    return this.app;
  }

  public render(): void {
    this.root?.appendChild(this.app.getElement());
  }
}

export default Renderer;
