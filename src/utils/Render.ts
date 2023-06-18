class Renderer {
  root: Element | null;

  constructor() {
    this.root = document.querySelector("#root");
  }

  Render(...elements: HTMLElement[]): void {
    for (const element of elements) {
      this.root?.appendChild(element);
    }
  }
}

export default Renderer;
