import App from "./comps/App";
import "./css/index.css";
import Renderer from "./classes/rendering/Renderer";
import Component from "./classes/comps/Component";
import DraggableComponent from "./classes/comps/DraggableComponent";

// COMPS
import Vertex from "./comps/Vertex";

// INIT
const renderer: Renderer = new Renderer();

const app: Component = new Component(App("app"));
const vertex: DraggableComponent = new DraggableComponent(Vertex("one"), app);

app.addChild(vertex);

renderer.render(app);
