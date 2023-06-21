import App from "./comps/App";
import "./css/index.css";

// FUNC
import Renderer from "./classes/rendering/Renderer";

// COMPS
import VertexComp from "./comps/Vertex";

// INIT FUNC
const renderer: Renderer = new Renderer();

// INIT COMPS
const app = new App();
const vertex = new VertexComp(app);

// LINKING
app.addChild(vertex);
vertex.setParent(app);

// RENDERING
renderer.render(app);
