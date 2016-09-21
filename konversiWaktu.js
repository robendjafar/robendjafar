//konversi waktu
function konversi(detik){
            var menit;
            var detik;
            menit = Math.floor(detik/60);
            detik = detik%60;

            return [menit+ ":" + detik];
        }

konversi(1000);

//atau

var calculate = function (number) {
   var menit =Math.floor(number/60);
   var detik = number%60 ;
   console.log(menit + ": " + detik);
}

calculate(1000);
