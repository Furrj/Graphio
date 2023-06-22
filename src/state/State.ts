import App from "../comps/App";
import Vertex from "../comps/Vertex";
import Renderer from "../classes/rendering/Renderer";

class State {
  private root: HTMLElement | null = null;
  private vertexes: Vertex[] = [];
  private renderer: Renderer;

  constructor() {
    this.setRoot();
    this.renderer = new Renderer(this);
  }

  private setRoot(): boolean {
    this.root = document.querySelector("#root");
    if (this.root) {
      return true;
    } else return false;
  }

  public getRenderer(): Renderer {
    return this.renderer;
  }

  public getVertexes(): Vertex[] {
    return this.vertexes;
  }

  private addVertex(vertex: Vertex): void {
    this.vertexes.push(vertex);
  }
}

export default State;
