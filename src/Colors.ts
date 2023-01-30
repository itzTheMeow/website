export enum Colors {
  primary = "#414558",
  secondary = "#21222c",
  tertiary = "#111315",
  navbar = "#282a36",
}

export const Gradients = {
  Orange: ["#f7b733", "#fc4a1a"], // Orange Fun
  Purple: ["#834d9b", "#d04ed6"], // Suzy
};
export function Gradient(colors: string[]) {
  return `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`;
}
