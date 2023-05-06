import { writable } from "svelte/store";

export const getWindow = () => (typeof window !== "undefined" ? window : null);

export const ScreenWidth = writable(Infinity);

function calcScreen() {
  ScreenWidth.set(getWindow()?.innerWidth || Infinity);
}
getWindow()?.addEventListener("resize", () => calcScreen());
getWindow()?.addEventListener("focus", () => calcScreen());
getWindow()?.addEventListener("deviceorientation", () => calcScreen());
calcScreen();

export const playedSplash = writable(false);
