import App from "./comps/App";
import "./css/index.css";
import Renderer from "./classes/rendering/Renderer";

// COMPS
import VertexComp from "./comps/Vertex";
import Button from "./comps/Button";

// INIT FUNC
const renderer: Renderer = new Renderer();

// INIT COMPS
const vertex = new VertexComp();

// LINKING

renderer.render(vertex);
