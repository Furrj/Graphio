import App from "../comps/App";
import Vertex from "../comps/Vertex";
import Renderer from "../classes/rendering/Renderer";
import VertexSpawner from "./VertexSpawner";

class State {
  private root: HTMLElement | null = null;
  private vertexes: Vertex[] = [];
  private renderer: Renderer;
  private app: App;
  private vertexSpawner: VertexSpawner;

  constructor() {
    this.setRoot();
    this.renderer = new Renderer(this);
    this.app = this.renderer.getApp();
    this.vertexSpawner = new VertexSpawner(this, this.app);
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
    this.renderer.render();
  }

  public spawnVertex(): void {
    this.addVertex(this.vertexSpawner.spawnVertex());
  }
}

export default State;
