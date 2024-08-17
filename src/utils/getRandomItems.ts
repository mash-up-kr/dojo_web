export const getRandomItems = <T>(arr: T[], count: number): T[] => {
  const result: T[] = [];
  const arrayCopy = [...arr];

  for (let i = 0; i < count; i++) {
    if (arrayCopy.length === 0) break;
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    const randomItem = arrayCopy.splice(randomIndex, 1)[0];
    result.push(randomItem);
  }

  return result;
};
