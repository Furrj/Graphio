function containsValue(
  values: string[] | undefined,
  searchFor: string
): boolean {
  if (values) {
    for (const value of values) {
      if (value === searchFor) return true;
    }
  }

  return false;
}

export default containsValue;
