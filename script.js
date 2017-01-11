$(document).ready(function() {
    $('button').on('click', function() {
        var changeColor = '#';

        for (var i = 0; i < 6; i++) {
            changeColor += randomNumber(0, 9);
        }
        $('body').append('<div class="block" style="background-color: ' + changeColor + ';"><button class = "delete">X</button>');
    });

    $('body').on('click', '.block', function() {
        $(this).css('background-color', '#000000');
    });

    $('body').on('click', '.delete', function() {
        $(this).closest('.block').remove();
    });
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};
