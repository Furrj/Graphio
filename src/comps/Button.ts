import "./css/app.css";

const Button = (id: string): HTMLButtonElement => {
  const spawnBtn: HTMLButtonElement = document.createElement("button");
  spawnBtn.id = id;
  return spawnBtn;
};

export default Button;
