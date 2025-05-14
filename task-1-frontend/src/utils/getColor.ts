export const getColor = (value: number): string => {
  const max = 40;
  const min = 10;
  const percent = (value - min) / (max - min);
  const colorScale: string[] = [
    "#fff5eb",
    "#fee6ce",
    "#fdd0a2",
    "#fdae6b",
    "#fd8d3c",
    "#f16913",
    "#d94801",
    "#a63603",
    "#7f2704",
  ];
  const index = Math.min(
    colorScale.length - 1,
    Math.floor(percent * colorScale.length)
  );
  return colorScale[index];
};
