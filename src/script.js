function appendMarkup(pos, link, sticky) {
    var markup = 'SRC_MARKUP';
    document.body.insertAdjacentHTML('beforeend', markup);
    var forkMeBaby = document.querySelector('.fork-me-baby');

    forkMeBaby.classList.add(pos);
    forkMeBaby.querySelector('a').setAttribute('href', link);
    if (sticky) forkMeBaby.classList.add('fork-me-baby--sticky');
    
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
    var sticky = data.sticky || false;

    if (!link) console.warn('No github link!');
    appendMarkup(pos, link, sticky);
}