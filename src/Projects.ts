export enum ProjectID {
  NVSTly = "nvstly",
  YTMusic = "ytmusic",
  RevKit = "revkit",
  PHLASH = "phlash",
  Svolte = "svolte",
  RsD = "rsd",
  NinjaIOUtils = "ninjaioutils",
}
export interface ProjectJSON {
  name: string;
  icon: string;
  color: string;
}

export const Projects: { [key in ProjectID]: ProjectJSON } = {
  [ProjectID.NVSTly]: {
    name: "NVSTly",
    icon: "https://cdn.nvstly.com/static/logo.svg",
    color: "#1dbac5",
  },
  [ProjectID.YTMusic]: {
    name: "YTMusic",
    icon: "https://raw.githubusercontent.com/itzTheMeow/YTMusic/main/logo.svg",
    color: "#661ae6",
  },
  [ProjectID.RevKit]: {
    name: "RevKit",
    icon: "https://raw.githubusercontent.com/Revolt-Unofficial-Clients/revkit/master/revkit-logo.svg",
    color: "#ff4654",
  },
  [ProjectID.PHLASH]: {
    name: "PHLASH",
    icon: "https://raw.githubusercontent.com/itzTheMeow/revolt-phlash/master/PHLASH.png",
    color: "#5b00c3",
  },
  [ProjectID.Svolte]: {
    name: "Svolte",
    icon: "https://raw.githubusercontent.com/itzTheMeow/revolt-svolte/master/svolte-logo.svg",
    color: "#ff4654",
  },
  [ProjectID.RsD]: {
    name: "Revolt Subsystem for Discord",
    icon: "https://raw.githubusercontent.com/itzTheMeow/revolt-subsystem-discord/master/rsd-logo-dark.svg",
    color: "#ff4654",
  },
  [ProjectID.NinjaIOUtils]: {
    name: "NinjaIOUtils",
    icon: "https://raw.githubusercontent.com/itzTheMeow/NinjaIOUtils/master/logo.png",
    color: "#344152",
  },
};
