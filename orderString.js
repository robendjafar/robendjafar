function sorting(kata) {
    return kata.sort();
}

var kata = 'matahari';
kata = kata.split("");
kata = kata.sort();
kata = kata.join("");

console.log(kata);