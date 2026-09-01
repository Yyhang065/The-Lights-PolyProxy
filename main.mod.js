import {
  PolyMod,
  MixinType,
} from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.2/PolyTypes.js";

class PolyProxyTestMod extends PolyMod {
  preInit = (pml) => {
    const proxy = "https://polyproxy.polymodloader.com/";

    // Replace the Kodub API origin with the PolyProxy origin.
    // This follows the same global REPLACEBETWEEN approach used by
    // PolyProxy 1.1.9, while avoiding a mutable class field.
    pml.registerGlobalMixin({
      type: MixinType.REPLACEBETWEEN,
      tokenStart: "https://vps.kodub.com/",
      tokenEnd: "https://vps.kodub.com/",
      func: proxy,
    });
  };
}

export let polyMod = new PolyProxyTestMod();
