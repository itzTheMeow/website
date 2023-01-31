import { writable } from "svelte/store";

export interface NavDrop {
  name: string;
  href: string;
}
export const NavButtons: { name: string; href: string | (() => any) | NavDrop[] }[] = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Portfolio", href: "/portfolio" },
  {
    name: "Tools",
    href: [
      { name: "BPM Finder", href: "/bpm-finder" },
      { name: "ultrablur", href: "/package/ultrablur" },
    ],
  },
];
export const openMenu = writable<NavDrop[] | true | null>(null);
