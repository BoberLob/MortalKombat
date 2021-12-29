export default function createElement(tag = 'div', className, content) {
  const el = document.createElement(tag);
  if (className) {
      el.classList.add(className);
  }

  if ( typeof content==='string'){
      el.innerText = content;
  }

  if (Array.isArray(content)) {
    content.forEach((item) => el.appendChild(item));
  }
  return el;
}
