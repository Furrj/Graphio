import Renderer from "../classes/rendering/Renderer";
import State from "../state/State";
import App from "../comps/App";

type initReturn = {
  renderer: Renderer;
  state: State;
  app: App;
};

const init = (): initReturn => {
  const state: State = new State();
  const renderer: Renderer = new Renderer(state);
  const app: App = renderer.getApp();
  return {
    state,
    renderer,
    app,
  };
};

export default init;
