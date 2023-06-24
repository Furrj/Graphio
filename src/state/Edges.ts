import Vertex from "../comps/Vertex";

class Edges {
  private edges: Map<string, string[] | undefined> = new Map();
  private isActiveVertex: boolean = false;
  private currentActiveVertex: Vertex | null = null;

  public addEdge(vertex1: Vertex, vertex2: Vertex): void {
    if (!this.edges.has(vertex1.getId())) {
      this.edges.set(vertex1.getId(), [vertex2.getId()]);
    } else {
      const vertex1Edges: string[] | undefined = this.edges.get(
        vertex1.getId()
      );
      vertex1Edges?.push(vertex2.getId());
      this.edges.set(vertex1.getId(), vertex1Edges);
    }

    if (!this.edges.has(vertex2.getId())) {
      this.edges.set(vertex2.getId(), [vertex1.getId()]);
    } else {
      const vertex2Edges: string[] | undefined = this.edges.get(
        vertex2.getId()
      );
      vertex2Edges?.push(vertex1.getId());
      this.edges.set(vertex2.getId(), vertex2Edges);
    }

    console.log("Added edge");
    console.log(this.edges);
  }

  public getEdges(): Map<string, string[] | undefined> {
    return this.edges;
  }

  public handleClickEdges(event: MouseEvent, vertex: Vertex): void {
    if (!this.isActiveVertex) {
      this.isActiveVertex = !this.isActiveVertex;
      this.currentActiveVertex = vertex;
      vertex.getElement().classList.add("activeVertex");
    } else {
      this.isActiveVertex = !this.isActiveVertex;
      if (this.currentActiveVertex) {
        if (this.currentActiveVertex.getId() == vertex.getId()) {
          this.currentActiveVertex
            .getElement()
            .classList.remove("activeVertex");
          this.currentActiveVertex = null;
          return;
        }

        this.addEdge(this.currentActiveVertex, vertex);
        this.currentActiveVertex.getElement().classList.remove("activeVertex");
        this.currentActiveVertex = null;
      } else {
        console.log("No currently active vertex");
      }
    }
  }
}

export default Edges;
