import "./css/app.css";

const root: Element | null = document.querySelector("#root");
console.log(root);

const test: HTMLDivElement = document.createElement("div");
test.id = "one";
root?.appendChild(test);
