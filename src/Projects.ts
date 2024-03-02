export enum ProjectID {
  NVSTly = "nvstly",
  YTMusic = "ytmusic",
  RevKit = "revkit",
  PHLASH = "phlash",
  Svolte = "svolte",
  RsD = "rsd",
  NinjaIOUtils = "ninjaioutils",
}
export enum ProjectSkill {
  Golang = "go",
  NodeJS = "node",
  NPM = "npm",
  RevKit = "revkit",
  Svelte = "svelte",
  TailwindCSS = "tailwind",
  TypeScript = "ts",
  Userscript = "userjs",
  Web = "the3horsemen",
}
export interface ProjectJSON {
  name: string;
  icon: string;
  color: string;
  skills: ProjectSkill[];
}

export const Projects: { [key in ProjectID]: ProjectJSON } = {
  [ProjectID.NVSTly]: {
    name: "NVSTly",
    icon: "https://cdn.nvstly.com/static/logo.svg",
    color: "#1dbac5",
    skills: [
      ProjectSkill.NodeJS,
      ProjectSkill.Svelte,
      ProjectSkill.TailwindCSS,
      ProjectSkill.TypeScript,
    ],
  },
  [ProjectID.YTMusic]: {
    name: "YTMusic",
    icon: "https://raw.githubusercontent.com/itzTheMeow/YTMusic/main/logo.svg",
    color: "#661ae6",
    skills: [
      ProjectSkill.Golang,
      ProjectSkill.Svelte,
      ProjectSkill.TailwindCSS,
      ProjectSkill.TypeScript,
    ],
  },
  [ProjectID.RevKit]: {
    name: "RevKit",
    icon: "https://raw.githubusercontent.com/Revolt-Unofficial-Clients/revkit/master/revkit-logo.svg",
    color: "#ff4654",
    skills: [ProjectSkill.NPM, ProjectSkill.TypeScript],
  },
  [ProjectID.PHLASH]: {
    name: "PHLASH",
    icon: "https://raw.githubusercontent.com/itzTheMeow/revolt-phlash/master/PHLASH.png",
    color: "#5b00c3",
    skills: [ProjectSkill.NodeJS, ProjectSkill.RevKit, ProjectSkill.TypeScript],
  },
  [ProjectID.Svolte]: {
    name: "Svolte",
    icon: "https://raw.githubusercontent.com/itzTheMeow/revolt-svolte/master/svolte-logo.svg",
    color: "#ff4654",
    skills: [
      ProjectSkill.RevKit,
      ProjectSkill.Svelte,
      ProjectSkill.TailwindCSS,
      ProjectSkill.TypeScript,
    ],
  },
  [ProjectID.RsD]: {
    name: "Revolt Subsystem for Discord",
    icon: "https://raw.githubusercontent.com/itzTheMeow/revolt-subsystem-discord/master/rsd-logo-dark.svg",
    color: "#ff4654",
    skills: [ProjectSkill.NodeJS, ProjectSkill.TypeScript],
  },
  [ProjectID.NinjaIOUtils]: {
    name: "NinjaIOUtils",
    icon: "https://raw.githubusercontent.com/itzTheMeow/NinjaIOUtils/master/logo.png",
    color: "#344152",
    skills: [ProjectSkill.TypeScript, ProjectSkill.Userscript],
  },
};
