import App from "./comps/App";
import "./css/index.css";

// FUNC
import init from "./utils/init";

// COMPS
import SpawnButton from "./comps/SpawnButton";
import Node from "./comps/Node";

// INIT FUNC
const { state, renderer, app } = init();

// INIT COMPS
const spawnBtn: SpawnButton = new SpawnButton(state);
const node: Node = new Node();

app.addChild(node);

// RENDERING
renderer.render();
