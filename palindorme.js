function Palindrome(abc) {
    return abc == abc.split("").reverse().join("") ? true : false;
}

console.log(Palindrome("katak"));
