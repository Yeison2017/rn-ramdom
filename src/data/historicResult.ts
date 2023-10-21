import { SubArray } from "../interfaces";
import { historicBallots } from "./historicBallots";
import { historicOldBallots } from "./historicOldBallots";
import { historicOldRematch } from "./historicOldRematch";
import { historicRematch } from "./historicRematch";

export const historicResult: SubArray[] = [
  ...historicBallots,
  ...historicRematch,
  ...historicOldBallots,
  ...historicOldRematch,
];
