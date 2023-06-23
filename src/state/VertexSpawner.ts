import Vertex from "../comps/Vertex";
import State from "./State";
import App from "../comps/App";

class VertexSpawner {
  private state: State;
  private app: App;
  private vertexCount: number = 0;

  constructor(state: State, app: App) {
    this.state = state;
    this.app = app;
  }

  public spawnVertex(): Vertex {
    const newVertex = new Vertex(this.app);
    newVertex.getElement().id = `vertex${this.vertexCount}`;
    this.vertexCount++;
    return newVertex;
  }
}

export default VertexSpawner;
