import { Paths } from "Paths";
import { writable } from "svelte/store";

export interface NavDrop {
  name: string;
  href: string;
}
export const NavButtons: { name: string; href: string | (() => any) | NavDrop[] }[] = [
  { name: "Home", href: Paths.Splash },
  { name: "Blog", href: Paths.Blog },
  { name: "Portfolio", href: Paths.Portfolio },
  {
    name: "Tools",
    href: [{ name: "BPM Finder", href: Paths.ToolBPMFinder }],
  },
];
export const openMenu = writable<NavDrop[] | true | null>(null);
