const accElem = document.querySelectorAll('.acc-elem');

let isHovered = false;

function onHover (e) {
    if (!isHovered && e.currentTarget.classList.contains('acc-elem')) {
        e.currentTarget.querySelector('.subtitle').classList.toggle('rotated');
        e.currentTarget.querySelector('.hide').classList.replace('hide', 'show')
        isHovered = true;
    }
}

function onHovernt (e) {
    if (isHovered && e.currentTarget.classList.contains('acc-elem')) {
        e.currentTarget.querySelector('.subtitle').classList.toggle('rotated');
        e.currentTarget.querySelector('.show').classList.replace('show', 'hide')
        isHovered = false;
    }
}

accElem.forEach((elem) => elem.addEventListener('mouseover', onHover));
accElem.forEach((elem) => elem.addEventListener('mouseout', onHovernt));