function Render(elements: HTMLElement[], root: Element | null): void {
  for (const element of elements) {
    root?.appendChild(element);
  }
}

export default Render;
