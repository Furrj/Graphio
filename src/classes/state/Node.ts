import Component from "../comps/Component";

class Node {
  private component: Component;
  private children: Node[] | null = null;

  constructor(component: Component) {
    this.component = component;
  }

  public getComponent(): Component {
    return this.component;
  }

  public getChildren(): Node[] | null {
    return this.children;
  }

  public addChild(child: Node): void {
    this.children?.push(child);
  }
}

export default Node;
