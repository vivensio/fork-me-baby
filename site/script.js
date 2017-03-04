(function(){
    var position = 'top-right';
    var sticky = false;
    repeat();

    // by Todd Motto
    var forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); // passes back stuff we need
        }
    };

    var btns = document.querySelectorAll('.btn-change-position');
    forEach(btns, function (index, btn) {
        btn.addEventListener('click', function () {
            document.querySelector('.fork-me-baby').className = 'fork-me-baby ' + btn.value;
            document.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected');
            position = btn.value;
            reset();
        });
    });

    document.querySelector('#check-sticky').addEventListener('click', function (e) {
        sticky = this.checked;
        reset();
    });

    function reset() {
        document.querySelector('.fork-me-baby').remove();
        document.querySelector('style').remove();
        repeat();
    }

    function repeat () {
        forkMeBaby({
            position : position,
            link: 'https://patelvivek.com/fork-me-baby',
            sticky: sticky
        });
    }
})();