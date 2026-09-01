import {
  PolyMod,
} from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.2/PolyTypes.js";

class PolyProxyTestMod extends PolyMod {
  preInit = (pml) => {
    console.log("[PolyProxy Test] preInit successfully ran!");
  };
}

export let polyMod = new PolyProxyTestMod();
