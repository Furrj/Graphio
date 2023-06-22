import State from "./State";
import App from "../comps/App";
import Component from "../classes/comps/Component";

class ComponentFactory {
  private state: State;
  private app: App;

  constructor(state: State, app: App) {
    this.state = state;
    this.app = app;
  }
}

export default ComponentFactory;
