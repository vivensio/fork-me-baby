(function () {
    var forkMeBaby = function (options) {
        var pos = options.position || 'top-right';
        var link = options.link;
        var sticky = options.sticky || false;

        if (!link) console.warn('No github link!');
        appendMarkup(pos, link, sticky);
    };
    var appendMarkup = function (pos, link, sticky) {
        var markup = 'SRC_MARKUP';
        document.body.insertAdjacentHTML('beforeend', markup);
        var forkMeBaby = document.querySelector('.fork-me-baby');

        forkMeBaby.classList.add(pos);
        forkMeBaby.querySelector('a').setAttribute('href', link);
        if (sticky) forkMeBaby.classList.add('fork-me-baby--sticky');
        
        appendStyles();
    };
    var appendStyles = function () {
        var style = document.createElement('style');
        style.innerHTML = 'SRC_STYLE';
        document.querySelector('body').appendChild(style);
    }

    window.forkMeBaby = forkMeBaby;
    
})();