import App from "./comps/App";
import "./css/index.css";

// FUNC
import init from "./utils/init";

// COMPS
import Vertex from "./comps/Vertex";
import SpawnButton from "./comps/SpawnButton";

// INIT FUNC
const { state, renderer, app } = init();

// INIT COMPS
const spawnBtn: SpawnButton = new SpawnButton(state);

// RENDERING
renderer.render();
