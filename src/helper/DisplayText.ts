export const DisplayText = <T>(text: T): Promise<T> => {
  const interval = 1500;
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(text);
    }, interval);
  });
};
