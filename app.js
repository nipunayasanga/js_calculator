(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function(e) {
        try {
            let expression = screen.value;

            if (expression === '') {
                screen.value = '';
                return;
            }

            // Use a regular expression to replace unsupported characters and handle multiplication
            expression = expression.replace(/[^-()\d/*+.]/g, '');
            expression = expression.replace(/(\d)\(/g, '$1*('); // Add explicit multiplication between numbers and parentheses

            let result = new Function('return ' + expression)();
            screen.value = result;
        } catch (error) {
            screen.value = 'Error';
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = '';
    });
})();
