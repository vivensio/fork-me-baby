(function () {
    var forkMeBaby = function (options) {
        var pos = options.position || 'top-right';
        var link = options.link;
        var sticky = options.sticky || false;

        if (!link) console.warn('No github link!');
        appendMarkup(pos, link, sticky);
    };
    var appendMarkup = function (pos, link, sticky) {
        var markup = '<div class="fork-me-baby"><a title="Fork me on GitHub" target="_blank"><svg aria-hidden="true" class="github-octicon-mark" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></div>';
        document.body.insertAdjacentHTML('beforeend', markup);
        var forkMeBaby = document.querySelector('.fork-me-baby');

        forkMeBaby.classList.add(pos);
        forkMeBaby.querySelector('a').setAttribute('href', link);
        if (sticky) 
            forkMeBaby.classList.add('fork-me-baby--sticky');

        if (pos.indexOf('bottom') > -1)
            handleBottom(sticky);
        appendStyles();
    };
    var handleBottom = function (sticky) {
        if (sticky) return;
        else {
            var scrollHeight = document.documentElement.scrollHeight;
            document.querySelector('.fork-me-baby').style.top = scrollHeight + 'px';
        }
    }
    var appendStyles = function () {
        var style = document.createElement('style');
        style.innerHTML = '.fork-me-baby{position:absolute}.fork-me-baby:before{content:"";border-style:solid;position:absolute;pointer-events:none;transition:all .25s ease-in-out}.fork-me-baby .github-octicon-mark{fill:#fff}@media (min-width:321px) and (max-width:767px){.fork-me-baby .github-octicon-mark{height:24px;width:24px}}.fork-me-baby a{position:absolute;top:15px;height:32px}.fork-me-baby--sticky{position:fixed}.fork-me-baby.top-left{top:0;left:0}.fork-me-baby.top-left:before{border-top-width:0;border-right-width:0;border-bottom-width:100px;border-left-width:125px;border-color:transparent;border-left-color:#333}.fork-me-baby.top-left:hover:before{border-color:transparent;border-left-color:#4078c0}.fork-me-baby.top-left:active:before{border-color:transparent;border-left-color:#6495ed}.fork-me-baby.top-left:before{top:0;left:0}.fork-me-baby.top-left a{left:20px}@media (min-width:321px) and (max-width:767px){.fork-me-baby.top-left:before{border-top-width:0;border-right-width:0;border-bottom-width:60px;border-left-width:75px;border-color:transparent;border-left-color:#333}.fork-me-baby.top-left:hover:before{border-color:transparent;border-left-color:#4078c0}.fork-me-baby.top-left:active:before{border-color:transparent;border-left-color:#6495ed}.fork-me-baby.top-left a{left:7px;top:7px}}.fork-me-baby.top-right{top:0;right:0}.fork-me-baby.top-right:before{border-top-width:0;border-right-width:125px;border-bottom-width:100px;border-left-width:0;border-color:transparent;border-right-color:#333}.fork-me-baby.top-right:hover:before{border-color:transparent;border-right-color:#4078c0}.fork-me-baby.top-right:active:before{border-color:transparent;border-right-color:#6495ed}.fork-me-baby.top-right:before{top:0;right:0}.fork-me-baby.top-right a{right:20px}@media (min-width:321px) and (max-width:767px){.fork-me-baby.top-right:before{border-top-width:0;border-right-width:75px;border-bottom-width:60px;border-left-width:0;border-color:transparent;border-right-color:#333}.fork-me-baby.top-right:hover:before{border-color:transparent;border-right-color:#4078c0}.fork-me-baby.top-right:active:before{border-color:transparent;border-right-color:#6495ed}.fork-me-baby.top-right a{top:7px;right:7px}}.fork-me-baby.bottom-right{bottom:0;right:0}.fork-me-baby.bottom-right:before{border-top-width:0;border-right-width:0;border-bottom-width:100px;border-left-width:125px;border-color:transparent;border-bottom-color:#333}.fork-me-baby.bottom-right:hover:before{border-color:transparent;border-bottom-color:#4078c0}.fork-me-baby.bottom-right:active:before{border-color:transparent;border-bottom-color:#6495ed}.fork-me-baby.bottom-right:before{bottom:0;right:0}.fork-me-baby.bottom-right a{top:-45px;right:20px}@media (min-width:321px) and (max-width:767px){.fork-me-baby.bottom-right:before{border-top-width:0;border-right-width:0;border-bottom-width:60px;border-left-width:75px;border-color:transparent;border-bottom-color:#333}.fork-me-baby.bottom-right:hover:before{border-color:transparent;border-bottom-color:#4078c0}.fork-me-baby.bottom-right:active:before{border-color:transparent;border-bottom-color:#6495ed}.fork-me-baby.bottom-right a{top:-32px;right:7px}}.fork-me-baby.bottom-left{bottom:0;left:0}.fork-me-baby.bottom-left:before{border-top-width:0;border-right-width:125px;border-bottom-width:100px;border-left-width:0;border-color:transparent;border-bottom-color:#333}.fork-me-baby.bottom-left:hover:before{border-color:transparent;border-bottom-color:#4078c0}.fork-me-baby.bottom-left:active:before{border-color:transparent;border-bottom-color:#6495ed}.fork-me-baby.bottom-left:before{bottom:0;left:0}.fork-me-baby.bottom-left a{top:-45px;left:20px}@media (min-width:321px) and (max-width:767px){.fork-me-baby.bottom-left:before{border-top-width:0;border-right-width:75px;border-bottom-width:60px;border-left-width:0;border-color:transparent;border-bottom-color:#333}.fork-me-baby.bottom-left:hover:before{border-color:transparent;border-bottom-color:#4078c0}.fork-me-baby.bottom-left:active:before{border-color:transparent;border-bottom-color:#6495ed}.fork-me-baby.bottom-left a{top:-32px;left:7px}}';
        document.querySelector('body').appendChild(style);
    }

    window.forkMeBaby = forkMeBaby;
    
})();