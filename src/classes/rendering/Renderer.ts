import Component from "../comps/Component";

class Renderer {
  root: Element | null;

  constructor() {
    this.root = document.querySelector("#root");
  }

  public render(...elements: Component[]): void {
    for (const element of elements) {
      this.root?.appendChild(element.getComponent());
    }
  }
}

export default Renderer;
