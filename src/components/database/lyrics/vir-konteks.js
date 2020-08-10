import dieHappySong from "./die-happy-song";
import chemikaliee from './chemikaliee';
import velde from "./velde";
import jouEieKruisiging from "./jou-eie-kruisiging";
import dieRuimtevaarder from "./die-ruimtevaarder";
import sprokiesKatastrofies from "./sprokies-katastrofies";
import soutInMyAre from "./sout-in-my-are";
import morsJouDrank from "./mors-jou-drank";
import peruvianFlu from "./peruvian-flu";
import geeMeer from "./gee-meer";
import parafienParadys from "./parafien-paradys";
import dieMislukteRewolusie from "./die-mislukte-rewolusie";

// TODO: complete track listing
export default {
  title: 'Vir Konteks',
  tracks: [
    ...chemikaliee.tracks,
    ...velde.tracks,
    ...jouEieKruisiging.tracks,
    ...dieHappySong.tracks,
    ...dieRuimtevaarder.tracks,
    ...sprokiesKatastrofies.tracks,
    ...soutInMyAre.tracks,
    ...morsJouDrank.tracks,
    ...peruvianFlu.tracks,
    ...geeMeer.tracks,
    ...parafienParadys.tracks,
    ...dieMislukteRewolusie.tracks
  ]
}
