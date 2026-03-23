// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "hai sayangggg", time: 1.9 },
  { text: "heheheheheheh", time: 3 },
  { text: "gatau mau bilang apa", time: 7},
  { text: "aku cuma mau bilang", time: 10},
  { text: "aku bersyukur banget bisa ketemu kamu", time: 15},
  { text: "aku senengggg dan bahagiaaa bangett bisa ketemu kamu", time: 18 },
  { text: "kamu itu baikkkk bangetttt, cantikkkkk lagi, lengkap dah", time: 22 },
  { text: "kamu selalu berusaha jadi versi terbaik dirimu", time: 27 },
  { text: "kamu sudah menjadi anak yang luar biasa, kakak yang hebat,", time: 32 },
  { text: "dan pasangan yang keren parah ", time: 35 },
  { text: "jangan pernah berubah ya sayangggg :) ", time: 38 },
  { text: "aku minta maaf yaaaaa kita sering berantem", time: 42 },
  { text: "tapiiiii walaupun kita sering berantemmmm", time: 46 },
  { text: "rasa sayangku ke kamu ga pernah berubahhhh ;D ", time: 50 },
  { text: "mungkin kalau orang bilang cinta itu dari 100 ke 0", time: 55},
  { text: "buatku cinta itu dari 100 ke 1000000000+++", time: 59 },
  { text: "kamu tuuuuu ga ada kurang nyaaa lagiii tauuu", time: 63 },
  { text: "buatkuuuu kamu itu berkat terindah yang tuhan kasih ke aku", time: 66 },
  { text: "kemarin sekarang besok dan sampai selamanya ", time: 70 },
  { text: "sejauh mana pun jarak kitaa", time: 74 },
  { text: "apa pun yang terjadi", time: 77 },
  { text: "aku tetap punyamu dan kamu tetaplah punyaku", time: 80 },
  { text: "aku selalu berdoa ke Tuhan", time: 88 },
  { text: "berharap suatu saat nanti ", time: 92 },
  { text: "kita bisa senyum ketawa sambil ngingat kita yang lama", time: 96 },
  { text: "berharap Tuhan tetap merestui kita sampai akhir", time: 102 },
  { text: "sayangggggggg", time: 108 },
  { text: "terima kasih udah hadir di hidup ku", time: 112 },
  { text: "kamu bentuk cintah terindah yang ada di hidupku", time: 116 },
  { text: "terima kasih buat semua kasih sayang yang kamu berikan", time: 122 },
  { text: "terima kasih buat perhatian yang kamu berikan", time:126 },
  { text: "aku minta maaf belum bisa jadi pasangan yang kamu harapkan", time: 130 },
  { text: "tapi aku janji aku akan terus berusaha", time: 135 },
  { text: "buat jadi pasangan yang kamu inginkan", time: 140 },
  { text: "selamat liburan sayangggg ", time: 144 },
  { text: "hati hati yaaa ", time: 148 },
  { text: "sehat sehat sampai tujuan :) ", time: 152 },
  { text: "I love you 💗 ", time: 155 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);