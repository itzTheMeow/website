import { writable } from "svelte/store";

export const ScreenWidth = writable(Infinity);

if (typeof window !== "undefined") {
  function calcScreen() {
    ScreenWidth.set(window.innerWidth);
  }
  window.addEventListener("resize", () => calcScreen());
  window.addEventListener("focus", () => calcScreen());
  window.addEventListener("deviceorientation", () => calcScreen());
  calcScreen();
}
