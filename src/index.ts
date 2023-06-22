import App from "./comps/App";
import "./css/index.css";

// FUNC
import init from "./utils/init";

// COMPS
import Vertex from "./comps/Vertex";

// INIT FUNC
const { state, renderer, app } = init();

// INIT COMPS
const vertex: Vertex = new Vertex(app, state);

// RENDERING
renderer.render();
