export enum Colors {
  primary = "#414558",
  secondary = "#21222c",
  tertiary = "#111315",
  navbar = "#282a36",
}

// https://uigradients.com
export const Gradients = {
  Blue: ["#00b4db", "#0083b0"], // Blue Raspberry
  Orange: ["#f7b733", "#fc4a1a"], // Orange Fun
  Pink: ["#b24592", "#f15f79"], // Blush
  Purple: ["#834d9b", "#d04ed6"], // Suzy
};
export function Gradient(colors: string[]) {
  return `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`;
}
