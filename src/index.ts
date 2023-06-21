import App from "./comps/App";
import "./css/index.css";
import Renderer from "./classes/rendering/Renderer";
import Component from "./classes/comps/Component";
import DraggableComponent from "./classes/comps/DraggableComponent";

// COMPS
import Vertex from "./comps/Vertex";

// INIT
const FPS: number = 60;
const renderer: Renderer = new Renderer();
const app: Component = new Component(App("app"), renderer);
const vertex: DraggableComponent = new DraggableComponent(
  Vertex("one"),
  renderer,
  app
);
app.addChild(vertex);

renderer.render(app);

// MAIN LOOP
// const gameLoop: NodeJS.Timer = setInterval(() => {
//   //vertex.changePosition(1, 0);
// }, Math.floor(1000 / FPS));
