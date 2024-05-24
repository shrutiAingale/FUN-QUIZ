
document.addEventListener('DOMContentLoaded', function () {
    const answerInputs = document.querySelectorAll('.answer-input');
    const correctAnswers = {
        '1': 'w', '2': 'o', '3': 'n',   // 1
        '4': 'i', '5': 'n', '6': 't', '7': 'e', '8': 'r', '9': 'n', '10': 'e', '11': 't',   // 2
        '12': 'a', '13': 'c', '14': 't', '15': 'i', '16': 'o', '17': 'n',   // 3
        '18': 'd', '19': 'i', '20': 'f', '21': 'f', '22': 'e', '23': 'r', '24': 'e', '25': 'n', '26': 'c', '27': 'e',   // 4
        '28': 'b', '29': 'e', '30': 'a', '31': 'u', '32': 't', '33': 'y',   // 5
        '34': 'l', '35': 'o', '36': 'c', '37': 'a', '38': 'l',   // 6
        '39': 'h', '40': 'o', '41': 'm', '42': 'e', '43': 'p', '44': 'a', '45': 'g', '46': 'e',   // 7
        '47': 't', '48': 'a', '49': 'k', '50': 'e'   // 8
    };

    // Add an event listener for the keydown event on each answer input
    answerInputs.forEach((input, index) => {
        input.addEventListener('keydown', function (event) {
            const key = event.key;

            // Allow only one letter in the input
            if (/^[a-zA-Z]$/.test(key)) {
                this.value = key;

                // Move to the next input when a letter is entered
                const nextInput = answerInputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            } else if (key === 'Backspace') {
                // Delete the letter and move to the previous input when backspace is pressed
                this.value = '';
                const previousInput = answerInputs[index - 1];
                if (previousInput) {
                    previousInput.focus();
                }
            }

            // Prevent default behavior for arrow keys, delete, etc.
            event.preventDefault();
        });
    });

    document.getElementById('submitBtn').addEventListener('click', function () {
        const userAnswers = Array.from(answerInputs, (input, index) => {
            const number = index + 1;
            const enteredLetter = input.value;
            const correctLetter = correctAnswers[number];
            return { number, enteredLetter, correctLetter };
        });

        const success = userAnswers.every(({ enteredLetter, correctLetter }) => enteredLetter === correctLetter);

        if (success) {
            alert('Congratulations! All answers are correct.');
        } else {
            alert('Oops! Some answers are incorrect. Please check and try again.');
        }
    });
});
