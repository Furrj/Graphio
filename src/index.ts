import App from "./comps/App";
import "./css/index.css";

// FUNC
import init from "./utils/init";
import Renderer from "./classes/rendering/Renderer";
import State from "./state/State";

// COMPS
import Vertex from "./comps/Vertex";

// INIT FUNC
const { state, renderer } = init();

// INIT COMPS
const app = new App();
const vertex = new Vertex(app);

// LINKING
app.addChild(vertex);
vertex.setParent(app);

// RENDERING
renderer.render(app);
