import { Vector2 } from "./types";

class Dragger {
  initalPosition: Vector2 = { x: 0, y: 0 };

  public getInitialPosition(event: MouseEvent | null): Vector2 {
    if (event) {
      const pos: Vector2 = {
        x: event.clientX,
        y: event.clientY,
      };
      this.initalPosition = pos;
      return pos;
    }
    return { x: -1, y: -1 };
  }
}

export default Dragger;
