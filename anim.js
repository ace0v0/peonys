// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "hai sayangggg", time: 1.9 },
  { text: "heheheheheheh", time: 3 },
  { text: "maaf yaaa sayangggg", time: 4 },
  { text: "saat ini aku baru bisa kasi bunga ini", time: 6},
  { text: "tapi ku janji", time: 9},
  { text: "secepetnya bakal jadi bunga asliii", time: 13 },
  { text: "aku cuma mau bilang", time: 18 },
  { text: "makasi yaaaaaa", time: 23 },
  { text: "kamu udah selalu ada buat kuuu", time: 27 },
  { text: "kamu selalu ingatkan setiap ku salah", time: 32 },
  { text: "kamu selalu dukung apa yang aku suka", time: 35 },
  { text: "makasi yaaaaa sayanggggg ", time: 38 },
  { text: "kamu udah jadi orang yang paling ", time: 42 },
  { text: "bisa aku percaya", time: 46 },
  { text: "aku minta maaf yaaaaa", time: 50 },
  { text: "karna ku kamu sering marahhhh :)", time: 55},
  { text: "akuu tuu saaayanggg banget samamu", time: 59 },
  { text: "aku sayangg samamu gimanapun kamuu :)", time: 63 },
  { text: "hehehehhe", time: 66 },
  { text: "kamu tuu mengenalkan banyak ke aku", time: 70 },
  { text: "kamu kenalkan gimana rasanya dicintai", time: 74 },
  { text: "gimana rasanya ada tempat cerita", time: 77 },
  { text: "gimana rasanya punya tujuan", time: 80 },
  { text: "kamu tuuu berhargaaa banget buatkuu", time: 88 },
  { text: "mungkin karna semua ni baru pertama", time: 92 },
  { text: "aku belum ngerti cara ngebalas muuu", time: 96 },
  { text: "tapi tenanggg sayanggg", time: 102 },
  { text: "ku bakal usahain sebaik mungkinnn", time: 108 },
  { text: "aku mau jadi versi terbaikku buatmu", time: 112 },
  { text: "sayanggggggggg", time: 116 },
  { text: "terima kasih yaaaaaaaaaaa", time: 122 },
  { text: "kamu udah jadi anak yang baik", time:126 },
  { text: "kakak yang sabar", time: 130 },
  { text: "dan pasangan yang luar biasa", time: 135 },
  { text: "aku berdoa ke Tuhan, suatu saat nanti", time: 140 },
  { text: "kita bisa hidup satu atap", time: 144 },
  { text: "pake porsche pink pastinya 😜", time: 148 },
  { text: "aminnnnnnn ", time: 152 },
  { text: "heheheheheh ", time: 154 }, 
  { text: "I love you 💗 ", time: 156 },
  { text: "If I were pluto", time: 160 },
  { text: "you'd be tombaugh regio", time: 162 },
  { text: "see u my love", time: 165 },
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
