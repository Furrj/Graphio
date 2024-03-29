import Component from "../classes/comps/Component";

class App extends Component {
  constructor() {
    super(document.createElement("div"));
    this.getElement().id = "app";
  }

  public addChild(child: Component) {
    this.getElement().appendChild(child.getElement());
  }
}

export default App;
