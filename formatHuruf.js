//swapcase

var swapCase = function(kalimat){
    var letters = kalimat.split("");

    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            letters[i] = letters[i].toUpperCase();
        }else {
            letters[i] = letters[i].toLowerCase();
        }
    }
    kalimat = letters.join("");
    console.log(kalimat);
}

var textKalimat = 'Roben HACKTIv8';

swapCase(textKalimat);
