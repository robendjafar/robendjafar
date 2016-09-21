//pangkat
function squareIt(number1,number2) {
   return Math.pow(number1,number2);
}

console.log(squareIt(2,4))


//akar
function akar(number) {
   return Math.sqrt(number);
}

console.log(akar(4))

//hipotenusa

function hipotenusa(number1,number2) {
  return Math.sqrt((number1*number1 + number2*number2));

}

console.log(hipotenusa(3,4)+"cm")

//lingkaran

function lingkaran(jarijari)
{
    this.jarijari = jarijari;
  // area method
    this.luas = function ()
    {
        return Math.PI * this.jarijari * this.jarijari;
    };

}
var c = new lingkaran(7);
console.log('luas =', c.luas().toFixed(2));
