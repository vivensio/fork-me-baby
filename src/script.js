function appendMarkup(pos, link) {
    var markup = 'SRC_MARKUP';
    document.body.insertAdjacentHTML('beforeend', markup);
    var forkMeBaby = document.querySelector('.fork-me-baby');

    forkMeBaby.classList.add(pos);
    forkMeBaby.querySelector('a').setAttribute('href', link);
    
    appendStyles();
}

function appendStyles() {
    var style = document.createElement('style');
    style.innerHTML = 'SRC_STYLE';
    document.querySelector('body').appendChild(style);
}

function forkMeBaby(data) {
    var pos = data.position || 'top-right';
    var link = data.link;

    if (!link) console.warn('No github link!');
    appendMarkup(pos, link);
}