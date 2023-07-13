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

export const FormattedDate = (d: string | Date): string => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
