import "./app";
import "./css/index.css";
import Renderer from "./utils/Render";
import Component from "./utils/Component";

// COMPS
import Vertex from "./comps/Vertex";

// INIT
const FPS: number = 1000;
const renderer: Renderer = new Renderer();
const vertex: Component = new Component(Vertex("one"));

// MAIN LOOP
const gameLoop: NodeJS.Timer = setInterval(() => {
  vertex.changePosition(5, 0);

  renderer.Render(vertex);
}, FPS);
