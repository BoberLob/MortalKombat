import createElem from ('./createElem')

export default function createPlayer(fighters) {
    
    const $player = createElem('div', 'player' + fighters.id);
    const $progressbar = createElem('div', 'progressbar');
    const $character = createElem('div', 'character');
    const $life = createElem('div', 'life');
    const $name = createElem('div', 'name');
    const $img = createElem('img');
    
    $life.style.width = fighters.hr + "%";
    $name.innerText = fighters.name;
    $img.src = fighters.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    
   return $player;
};
