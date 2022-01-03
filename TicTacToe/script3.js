$(function () {
    var x = 'x';
    var o = 'o';
    var turns = 0;

    // var spots
    var spot1 = $('#spot1');
    var spot2 = $('#spot2');
    var spot3 = $('#spot3');
    var spot4 = $('#spot4');
    var spot5 = $('#spot5');
    var spot6 = $('#spot6');
    var spot7 = $('#spot7');
    var spot8 = $('#spot8');
    var spot9 = $('#spot9');

    $('#board li').on('click', function () {
        var condition = true;
        if (turns == 9) {
            turns = 0;
            alert('Tie Game');
            $('#board li').text('+');
            $('#board li').removeClass('disable o x').addClass('cl');
        } else if ($(this).hasClass('disable')) {
            alert('This spot is already filled');
        } else if (turns % 2 == 0) {
            turns++;
            $(this).text('o');
            $(this).addClass('disable o');
            $(this).removeClass('cl');
            setTimeout(() => {
                addX();
            }, 300);
            if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
                spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
                spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
                spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
                spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
                spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
                spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
                spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')) {
                alert('Winner: O');
                turns = 0;
                $('#board li').text('+');
                $('#board li').removeClass('disable o x').addClass('cl');
                condition = false;
            }
        }

        if (condition) {
            function addX() {
                turns++;
                var r = Math.floor(Math.random() * $('.cl').length);
                $('.cl').eq(r).text('x').addClass('disable x').removeClass('cl');
                if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
                    spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
                    spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
                    spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
                    spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
                    spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
                    spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
                    spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')) {
                    alert('Winner: X');
                    turns = 0;
                    $('#board li').text('+');
                    $('#board li').removeClass('disable o x').addClass('cl');
                }
            }
        }
    });
    $('#reset').click(function () {
        $('#board li').text('+');
        $('#board li').removeClass('disable x o').addClass('cl');
        turns = 0;
    })
});