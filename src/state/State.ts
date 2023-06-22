import App from "../comps/App";

class State {
  private root: HTMLElement | null = null;
  private app: App;

  constructor() {
    this.setRoot();
    this.app = new App();
  }

  private setRoot(): boolean {
    this.root = document.querySelector("#root");
    if (this.root) {
      return true;
    } else return false;
  }
}

export default State;
