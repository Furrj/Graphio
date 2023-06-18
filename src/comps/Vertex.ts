const Vertex = (id: string): HTMLDivElement => {
  const vertex = document.createElement("div");
  vertex.id = id;
  return vertex;
};

export default Vertex;
