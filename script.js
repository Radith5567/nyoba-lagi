// Function untuk efek konfeti/kembang api
function triggerConfetti() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Function untuk meniup lilin
function blowCandle() {
  const flame = document.getElementById('flame');
  const greetingText = document.getElementById('greetingText');
  
  if (!flame.classList.contains('off')) {
    flame.classList.add('off');
    
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 }
    });

    greetingText.innerText = "YAY! 🎉 Semoga semua impian dan cita-citamu tercapai di tahun ini!";
  } else {
    flame.classList.remove('off');
    greetingText.innerText = "Selamat merayakan hari spesialmu! Semoga di usia yang baru ini senantiasa dipenuhi kebahagiaan, kesehatan, keberhasilan, dan keberkahan dalam setiap langkah. 🌟";
  }
}

// Function ketika Kotak Interaktif Diklik
function openBox(boxElement, message) {
  // Ubah tampilan kotak saat dibuka
  boxElement.classList.add('opened');
  
  // Ganti teks pesan utama dengan pernyataan dari kotak
  const greetingText = document.getElementById('greetingText');
  greetingText.innerText = message;
  
  // Ambil posisi kotak untuk memunculkan efek love dari tengah kotak
  const rect = boxElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top;

  // Munculkan beberapa hati melayang secara bergantian
  const heartIcons = ['💖', '❤️', '💕', '💗', '✨'];
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      createFloatingHeart(centerX, centerY, heartIcons[i % heartIcons.length]);
    }, i * 120);
  }
}

// Function pembuat elemen Hati Melayang
function createFloatingHeart(x, y, icon) {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerText = icon;

  // Variasi posisi X acak sedikit agar menyebar
  const randomOffsetX = (Math.random() - 0.5) * 40;
  heart.style.left = `${x + randomOffsetX}px`;
  heart.style.top = `${y}px`;

  document.body.appendChild(heart);

  // Hapus elemen dari DOM setelah animasi selesai
  setTimeout(() => {
    heart.remove();
  }, 1200);
}

// Generate Balon Melayang secara Otomatis
function createBalloons() {
  const container = document.getElementById('balloonContainer');
  const colors = ['#ff8a80', '#ff80ab', '#ea80fc', '#b388ff', '#8c9eff', '#80d8ff', '#a7ffeb', '#ffd180'];

  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomLeft = Math.random() * 100;
    const randomDelay = Math.random() * 8;
    const randomDuration = 6 + Math.random() * 6;

    balloon.style.backgroundColor = randomColor;
    balloon.style.left = `${randomLeft}%`;
    balloon.style.animationDelay = `${randomDelay}s`;
    balloon.style.animationDuration = `${randomDuration}s`;

    container.appendChild(balloon);
  }
}

// Jalankan balon saat halaman siap
document.addEventListener('DOMContentLoaded', () => {
  createBalloons();
  setTimeout(triggerConfetti, 500);
});