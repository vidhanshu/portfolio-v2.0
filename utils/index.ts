export const stringShortner = (str: string, length: number): string => {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
};

export const arrayShortner = (arr: any[], length: number): any[] => {
  if (arr.length > length) {
    return arr.slice(0, length);
  }
  return arr;
};
