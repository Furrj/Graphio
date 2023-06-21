const Vertex = (id: string): HTMLDivElement => {
  const vertex = document.createElement("div");
  vertex.id = id;
  vertex.style.left = `${200}px`;
  vertex.style.top = `${200}px`;
  return vertex;
};

export default Vertex;
