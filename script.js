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
    
    // Kirim konfeti saat lilin mati
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 }
    });

    // Ubah ucapan setelah lilin ditiup
    greetingText.innerText = "YAY! 🎉 Semoga semua impian dan cita-citamu tercapai di tahun ini!";
  } else {
    // Menyalakan kembali jika diklik ulang
    flame.classList.remove('off');
    greetingText.innerText = "Selamat merayakan hari spesialmu! Semoga di usia yang baru ini senantiasa dipenuhi kebahagiaan, kesehatan, keberhasilan, dan keberkahan dalam setiap langkah. 🌟";
  }
}

// Generate Balon Melayang secara Otomatis
function createBalloons() {
  const container = document.getElementById('balloonContainer');
  const colors = ['#ff8a80', '#ff80ab', '#ea80fc', '#b388ff', '#8c9eff', '#80d8ff', '#a7ffeb', '#ffd180'];

  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Variasi acak posisi, warna, ukuran, dan kecepatan
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
  // Pemicu konfeti kecil saat pertama kali dibuka
  setTimeout(triggerConfetti, 500);
});