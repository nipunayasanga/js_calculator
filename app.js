(function() {
    // This line starts something called an "immediately-invoked function expression" (IIFE).
    // creating a little program that runs right away.

    let screen = document.querySelector('.screen')
    // We're finding an element on the webpage with a class of '.screen'.
    // Think of it as finding a place where we can show and manipulate information, like a calculator screen.

    let buttons = document.querySelectorAll('.btn');
    // We're finding all elements on the webpage with a class of '.btn'.
    // These are like the buttons on a calculator that we can click.

    let clear = document.querySelector('.btn-clear');
    // We're finding a specific button with a class of '.btn-clear'.
    // This could be a button to clear or reset the calculator.

    let equal = document.querySelector('.btn-equal');
    // We're finding another specific button with a class of '.btn-equal'.
    // This could be the button that calculates the result.

    buttons.forEach(function(button) {
        // For each button we found earlier, we're saying, "When it's clicked, do something."

        button.addEventListener('click', function(e) {
            // When a button is clicked, we're saying, "Here's what to do:"

            let value = e.target.dataset.num;
            // We're figuring out the value of the clicked button.
            // It's like understanding what the button represents.

            screen.value += value;
            // Whatever is on the screen, add the value of the clicked button to it.
            // It's like typing on a keyboard or adding more numbers to a calculator display.

        })
    });

    equal.addEventListener('click', function(e){
        // When the equal button is clicked, we're saying, "Here's what to do:"

        if(screen.value === ''){
            // If there's nothing on the screen, we say, "Keep it empty."

            screen.value = "";
        } else {
            // If there's something on the screen, we're saying, "Calculate the result."

            let answer = eval(screen.value);
            // The 'eval' function is like a smart calculator that can solve math problems.
            // It takes what's on the screen, solves it, and gives us the result.

            screen.value = answer;
            // Show the result on the screen.
            // It's like revealing the answer after doing some math.

        }
    })

    clear.addEventListener('click', function(e){
        // When the clear button is clicked, we're saying, "Here's what to do:"

        screen.value = "";
        // Make everything on the screen disappear.
        // It's like erasing a whiteboard before writing something new.

    })

})();
