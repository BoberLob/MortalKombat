import { game } from "./main.js";
import RestApiClass from "./RestApi.js";

export function chooseActions() {
  const result = {};
  for (const item of game.element) {
    const { checked, name, value } = item;
    if (checked && name === "hit") {
      result.hit = value;
    }
    if (checked && name === "defence") {
      result.defence = value;
    }

    item.checked = false;
  }
  return RestApiClass.postFightProcess(result.hit, result.defence)
}