import RestApiClass from "./RestApi.js";
import { createElement } from "./domhelpers.js";
import { sleep, getRandomNumber } from "./utils.js";
import { SOUNDS } from "./sounds.js";

const $parent = document.querySelector(".parent");
const $player = document.querySelector(".player");
const $player2 = document.querySelector(".player2");
const $audio = document.getElementById("sound");

async function getPlayers() {
  const data = await RestApiClass.getAllFighters();
  localStorage.setItem("players", JSON.stringify(data));
  return data;
}

function createEmptyPlayerBlock() {
  const el = createElement("div", ["character", "div11", "disabled"]);
  const img = createElement("img");
  img.src = "http://reactmarathon-api.herokuapp.com/assets/mk/avatar/11.png";
  el.appendChild(img);
  $parent.appendChild(el);
}

async function init() {
  localStorage.removeItem("player1");
  localStorage.removeItem("player2");

  const players =
    JSON.parse(localStorage.getItem("players")) ||
    (await getPlayers());

  const opponentPicks = [];
  while (opponentPicks.length !== 6) {
    const element = players[getRandomNumber(players.length)];
    if (!opponentPicks.includes(element)) {
      opponentPicks.push(element);
    }
  }

  let imgSrc = null;
  createEmptyPlayerBlock();
  let canChoose = true;

  players.forEach((item) => {
    function handleMouseMove(e) {
      if (canChoose && imgSrc === null) {
        e.target.closest(".character").classList.add("active");
        imgSrc = item.img;
        const $img = createElement("img");
        $img.src = imgSrc;
        $player.appendChild($img);
      }
    }

    function handleMouseOut(e) {
      if (canChoose && imgSrc) {
        e.target.closest(".character").classList.remove("active");
        imgSrc = null;
        $player.innerHTML = "";
      }
    }
    const el = createElement("div", ["character", `div${item.id}`]);
    const img = createElement("img");

    el.addEventListener("mousemove", handleMouseMove);

    el.addEventListener("mouseout", handleMouseOut);

    el.addEventListener("click", async (e) => {
      if (!canChoose) return;
      $audio.src = SOUNDS.names[item.name.toLowerCase()]
      $audio.play()
      canChoose = false;
      e.target.classList.add("active");
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseout", handleMouseOut);
      localStorage.setItem("player1", JSON.stringify(item));
      const opponent = await highlightRandomDiv();
      localStorage.setItem("player2", JSON.stringify(opponent));
      await sleep(1400);
      window.location.pathname = "arenas.html";
      //TODO: Мы кладем нашего игрока в localStorage что бы потом на арене его достать.
      // При помощи localStorage.getItem('player1'); т.к. в localStorage кладется строка,
      // то мы должны ее распарсить обратным методом JSON.parse(localStorage.getItem('player1'));
      // но это уже будет в нашем классе Game когда мы инициализируем игроков.
      // window.location.pathname = 'arenas.html';
      // TODO: Здесь должен быть код который перенаправит вас на ваше игровое поле...
      //  Пример использования: window.location.pathname = 'arenas.html';
    });
    async function highlightRandomDiv() {
      for (let i = 0; i < opponentPicks.length; i++) {
        const pick = opponentPicks[i];
        const div = document.querySelector(`.character.div${pick.id}`);
        const $image = createElement("img");
        $image.src = pick.img;
        $image.alt = pick.name;
        $player2.appendChild($image);
        await sleep(100);
        div.classList.add("selected");
        if (i !== opponentPicks.length - 1) {
          await sleep(700);
          $image.src = "";
          $image.alt = "";
          $player2.innerHTML = "";
          div.classList.remove("selected");
        } else {
          await sleep(500);
          $audio.src = SOUNDS.names[pick.name.toLowerCase()]
          $audio.play()
          return pick;
        }
      }
    }
    img.src = item.avatar;
    img.alt = item.name;

    el.appendChild(img);
    $parent.appendChild(el);
  });
}

init();
