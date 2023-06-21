import App from "./comps/App";
import "./css/index.css";
import Renderer from "./classes/rendering/Renderer";
import Component from "./classes/comps/Component";
import DraggableComponent from "./classes/comps/DraggableComponent";

// COMPS
import Vertex from "./comps/Vertex";
import Button from "./comps/Button";

// INIT FUNC
const renderer: Renderer = new Renderer();

// INIT COMPS
const app: Component = new Component(App("app"));
const vertex: DraggableComponent = new DraggableComponent(Vertex("one"), app);
const spawnButton: Component = new Component(Button("spawnBtn", addVertex));

function addVertex(): void {
  const vertex: DraggableComponent = new DraggableComponent(Vertex("one"), app);
  app.addChild(vertex);
  renderer.render(app);
}

// LINKING
app.addChild(vertex);
app.addChild(spawnButton);

renderer.render(app);
