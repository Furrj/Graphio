const Button = (id: string, addVertex: () => void): HTMLButtonElement => {
  const spawnBtn: HTMLButtonElement = document.createElement("button");
  spawnBtn.id = id;
  spawnBtn.className = "btn";
  spawnBtn.addEventListener("click", addVertex);
  return spawnBtn;
};

export default Button;
