import papierstraal from "./papierstraal";
import saamAlleen from "./saam-alleen";
import kleinDorp from "./klein-dorp";
import skedelEnBene from "./skedel-en-bene";
import ietsIsFokkenFoutMetMy from "./iets-is-fokken-fout-met-my";
import blyVersigtig from "./bly-versigtig";

export default {
  title: "Somer Sonder Sondes",
  tracks: [
    ...papierstraal.tracks,
    ...saamAlleen.tracks,
    ...kleinDorp.tracks,
    ...skedelEnBene.tracks,
    ...ietsIsFokkenFoutMetMy.tracks,
    ...blyVersigtig.tracks,
  ],
};
