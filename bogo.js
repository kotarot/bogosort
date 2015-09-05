// bogo.js

var ARRAY_SIZE = 8;

// From: http://bost.ocks.org/mike/shuffle/
var shuffle = function(array) {
    var m = array.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

// Check if two arrays are same
var equals = function(a1, a2) {
    var len1 = a1.length, len2 = a2.length;
    if (len1 != len2) {
        return false;
    }
    for (var i = 0; i < len1; i++) {
        if (a1[i] != a2[i]) {
            return false;
        }
    }
    return true;
}

var array_to_str = function(array) {
    return '[' + array.join(', ') + ']';
}

$(document).ready(function() {
    // Generate a sorted and suffled array.
    var answer = new Array(ARRAY_SIZE);
    for (var i = 0; i < ARRAY_SIZE; i++) {
        answer[i] = i + 1;
    }

    // Bogo sort
    var test = answer.concat();
    var bogo = setInterval(function() {
        shuffle(test);
        $('#sorting').text(array_to_str(test));
        $('#sorting').fadeIn(500, function() {
            if (!equals(test, answer)) {
                $('#sorting').addClass('array-neg');
                $('#sorting').fadeOut(1000, function() {
                    $('#sorting').removeClass('array-neg');
                });
            } else {
                clearInterval(bogo);
                $('#message').show();
            }
        });
    }, 2000);
});
