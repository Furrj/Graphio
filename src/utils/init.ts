import Renderer from "../classes/rendering/Renderer";
import State from "../state/State";

type initReturn = {
  renderer: Renderer;
  state: State;
};

const init = (): initReturn => {
  const state: State = new State();
  const renderer: Renderer = new Renderer(state);
  return {
    state,
    renderer,
  };
};

export default init;
