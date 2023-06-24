function contains(map: Map<string, string[]>, searchFor: string): boolean {
  if (map.has(searchFor)) {
    return true;
  } else return false;
}

export default contains;
