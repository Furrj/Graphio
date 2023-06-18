import "./app";
import "./css/index.css";
import Renderer from "./utils/Renderer";
import Component from "./utils/Component";
import DraggableComponent from "./utils/DraggableComponent";

// COMPS
import Vertex from "./comps/Vertex";

// INIT
const FPS: number = 60;
const renderer: Renderer = new Renderer();
const vertex: DraggableComponent = new DraggableComponent(
  Vertex("one"),
  renderer
);

vertex.renderComponent();

// MAIN LOOP
// const gameLoop: NodeJS.Timer = setInterval(() => {
//   //vertex.changePosition(1, 0);
// }, Math.floor(1000 / FPS));
