import App from "./index.svelte";
import "../node_modules/dracula-ui/styles/dracula-ui.css";
import "./style.css";

document.body.classList.add("drac-scrollbar-cyan");
new App({ target: document.body });
