export const $chat = document.querySelector(".chat");
export const $arenas = document.querySelector('.arenas');
export const $fight = document.querySelector('.fight')

export const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if (className) {
    if (Array.isArray(className)) {
      className.forEach(item => {
        $tag.classList.add(item);
      })
    } else {
      $tag.classList.add(className);
    }
  }

  return $tag;
}

export const appendChild = (parent, child) => parent.appendChild(child);

export const createReloadButton = () => {
  const $reloadButtonWrapper = createElement("div", "reloadWrap");
  const $reloadButton = createElement("button", "button");
  $reloadButton.innerText = "Restart";
  $reloadButton.addEventListener("click", () => {
    window.location.pathname = 'index.html';
  });

  appendChild($arenas, $reloadButtonWrapper);
  appendChild($reloadButtonWrapper, $reloadButton);
}

export const showResultText = title => {
  const $winTitle = createElement("div", "loseTitle");

  title
    ? ($winTitle.innerText = `${title} wins`)
    : ($winTitle.innerText = "DRAW");

  return $winTitle;
}