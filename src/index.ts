import "./app";
import "./css/app.css";
import Render from "./utils/Render";

//COMPS
import Button from "./Button";

const root: Element | null = document.querySelector("#root");
const spawnBtn = Button("one");

const elements: HTMLElement[] = [spawnBtn];

Render(elements, root);
