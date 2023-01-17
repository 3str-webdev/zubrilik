export const shuffle = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const range = (size: number, startAt = 0) => {
  const result = [...Array(size).keys()].map((i) => i + startAt);
  result.length -= startAt;
  return result;
};
