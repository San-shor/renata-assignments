export const getColor = (value: number): string => {
  const max = 40;
  const min = 10;
  const percent = (value - min) / (max - min);
  const colorScale: string[] = [
    "var(--bar-color-1)",
    "var(--bar-color-2)",   
    "var(--bar-color-3)",
    "var(--bar-color-4)",
    "var(--bar-color-5)",
    "var(--bar-color-6)",
    "var(--bar-color-7)",
    "var(--bar-color-8)",
    "var(--bar-color-9)",
  ];
  const index = Math.min(
    colorScale.length - 1,
    Math.floor(percent * colorScale.length)
  );
  return colorScale[index];
};
