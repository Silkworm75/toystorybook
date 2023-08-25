// Generate a random index within the range of array length
const randomIndex = (arr: string[]): number => {
  return Math.floor(Math.random() * arr.length);
};

export default randomIndex;
