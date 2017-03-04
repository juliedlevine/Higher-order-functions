function cipher(text) {
    // Array of individual letters ['A', 'B', 'C'] etc.
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    // Array of text [ 'G', 'E', 'N', 'I', 'U', 'S' ]
    var textArray = text.split('');
    // Build code break, start with empty string
    var result = '';
    // Loop over each item in text Array
    textArray.forEach(function(char){
        // Get index number of each letter 6, 4, 13 etc.
        var index = alphabet.indexOf(char.toUpperCase());
        // Change index to offset number
        var newIndex = index + 13;
        // If the new index goes past the alphabet, start over
        if (newIndex >= alphabet.length) {
            newIndex -= 26;
        }
        // Build up string by grabbing the right character from the alphabet array
        result += alphabet[newIndex];
    });
    return result;
}

console.log(cipher('GENIUS'));
