export default function createElement(el, className) {
    const tag = document.createElement(el);
    if (className) {
        tag.classList.add(className);
    }
    return tag;
}
