// FIX-IT CITY v2.0
// Simulasi edukatif: tidak mengubah jaringan/perangkat sungguhan.

const missions = [
  {
    day:1,title:"School Network Down",description:"Seluruh komputer sekolah kehilangan koneksi internet. Temukan sumber gangguannya!",
    components:[["Modem","Koneksi dari penyedia internet"],["Router","Pengatur jalur jaringan"],["Switch","Penghubung perangkat LAN"],["Komputer siswa","Perangkat pengguna"]],
    pattern:{log:"[08:00] Modem: ONLINE\n[08:01] Router: NO RESPONSE\n[08:02] Komputer: CONNECTION FAILED",question:"Perangkat mana yang paling mungkin menjadi sumber gangguan?",options:["Router tidak merespons","Monitor komputer mati","Keyboard tidak terdeteksi"],answer:0},
    abstraction:{question:"Informasi mana yang paling penting untuk menentukan langkah pemeriksaan pertama?",options:["Router tidak merespons","Warna meja laboratorium","Jumlah kursi di kelas"],answer:0},
    algorithm:["MULAI","Periksa status router","Jika router tidak merespons","Jalankan simulasi restart router","Periksa kembali koneksi","Tampilkan hasil"]
  },
  {
    day:1,title:"Computer Lab Connection Error",description:"Beberapa komputer di laboratorium tidak dapat terhubung ke jaringan lokal.",
    components:[["Switch","Menghubungkan komputer dalam LAN"],["Kabel LAN","Media penghantar data"],["Komputer","Perangkat pengguna"],["Printer jaringan","Perangkat berbagi di LAN"]],
    pattern:{log:"[09:00] PC-01: CONNECTED\n[09:01] PC-02: CONNECTED\n[09:02] Switch Port 4: LINK DOWN\n[09:03] PC-04: OFFLINE",question:"Petunjuk yang paling kuat menunjukkan gangguan pada bagian mana?",options:["Port switch nomor 4","Wallpaper PC-04","Speaker laboratorium"],answer:0},
    abstraction:{question:"Data mana yang perlu diprioritaskan saat menganalisis gangguan ini?",options:["Status link pada port switch","Warna casing komputer","Nama pengguna PC-04"],answer:0},
    algorithm:["MULAI","Identifikasi komputer yang offline","Periksa kabel dan port terkait","Jika link port mati","Laporkan port untuk pemeriksaan","Catat hasil pemeriksaan"]
  },
  {
    day:1,title:"Student Information System Failure",description:"Aplikasi informasi siswa tidak dapat dibuka oleh beberapa pengguna.",
    components:[["Browser","Menampilkan aplikasi web"],["Server aplikasi","Menjalankan layanan aplikasi"],["Jaringan","Menghubungkan klien dan server"],["Pengguna","Mengakses layanan"]],
    pattern:{log:"[10:00] Network: ACTIVE\n[10:01] Browser: PAGE TIMEOUT\n[10:02] App Server: SERVICE UNAVAILABLE",question:"Bagian mana yang perlu diperiksa berdasarkan log?",options:["Layanan server aplikasi","Kecerahan monitor","Mouse pengguna"],answer:0},
    abstraction:{question:"Informasi apa yang paling relevan untuk memahami penyebab aplikasi gagal dibuka?",options:["Status layanan server aplikasi","Model meja komputer","Warna ikon browser"],answer:0},
    algorithm:["MULAI","Periksa koneksi jaringan","Periksa status server aplikasi","Jika layanan tidak tersedia","Catat pesan error untuk admin","Uji akses kembali"]
  },
  {
    day:2,title:"Database Connection Lost",description:"Aplikasi sekolah berjalan, tetapi data siswa gagal dimuat dari database.",
    components:[["Aplikasi","Mengirim permintaan data"],["Database","Menyimpan data terstruktur"],["Server","Menjalankan layanan"],["Koneksi internal","Menghubungkan aplikasi dan database"]],
    pattern:{log:"[08:15] Web App: RUNNING\n[08:16] Database: CONNECTION REFUSED\n[08:17] Data Query: FAILED",question:"Apa petunjuk utama dari catatan sistem?",options:["Koneksi ke database ditolak","Layar komputer terlalu redup","Printer kehabisan kertas"],answer:0},
    abstraction:{question:"Informasi mana yang paling penting untuk diteruskan kepada admin?",options:["Database menolak koneksi dari aplikasi","Jumlah tab browser terbuka","Jenis wallpaper server"],answer:0},
    algorithm:["MULAI","Pastikan aplikasi berjalan","Periksa status koneksi database","Jika koneksi ditolak","Simpan pesan error dan laporkan","Verifikasi setelah perbaikan admin"]
  },
  {
    day:2,title:"Server Overload",description:"Layanan digital sekolah menjadi lambat ketika banyak pengguna mengakses bersamaan.",
    components:[["Server","Memproses permintaan"],["Pengguna","Mengirim permintaan layanan"],["Monitoring","Mencatat penggunaan sumber daya"],["Aplikasi","Menyediakan fitur layanan"]],
    pattern:{log:"[11:00] CPU Usage: 98%\n[11:01] Active Users: HIGH\n[11:02] Response Time: 12s",question:"Pola apa yang terlihat dari data tersebut?",options:["Penggunaan CPU sangat tinggi saat pengguna banyak","Koneksi internet pasti terputus","Monitor server mengalami kerusakan"],answer:0},
    abstraction:{question:"Data mana yang paling relevan untuk menilai beban server?",options:["CPU usage dan response time","Warna lampu indikator ruangan","Ukuran layar pengguna"],answer:0},
    algorithm:["MULAI","Buka data monitoring","Periksa penggunaan CPU dan memori","Bandingkan dengan jumlah permintaan","Catat waktu beban tertinggi","Laporkan temuan kepada admin"]
  },
  {
    day:2,title:"Login Authentication Error",description:"Pengguna yang benar tidak dapat masuk ke sistem karena proses autentikasi gagal.",
    components:[["Pengguna","Memasukkan identitas akun"],["Form login","Menerima data login"],["Layanan autentikasi","Memeriksa identitas"],["Database akun","Menyimpan data akun"]],
    pattern:{log:"[13:00] Login Request: RECEIVED\n[13:00] Auth Service: ERROR\n[13:01] Account Database: AVAILABLE",question:"Komponen mana yang paling perlu diperiksa lebih dahulu?",options:["Layanan autentikasi","Kabel proyektor","Speaker komputer"],answer:0},
    abstraction:{question:"Informasi mana yang sebaiknya dipisahkan dari detail yang tidak relevan?",options:["Layanan autentikasi mengalami error","Pengguna memakai seragam biru","Ukuran meja pengguna"],answer:0},
    algorithm:["MULAI","Periksa pesan error login","Periksa status layanan autentikasi","Jika layanan error","Catat kode error dan laporkan","Uji login setelah layanan pulih"]
  },
  {
    day:3,title:"Public Wi-Fi Failure",description:"Pengunjung sekolah terhubung ke Wi-Fi, tetapi tidak dapat mengakses internet.",
    components:[["Access Point","Menyediakan akses Wi-Fi"],["Router","Mengatur lalu lintas jaringan"],["Perangkat pengguna","Terhubung ke Wi-Fi"],["Internet gateway","Menghubungkan jaringan ke internet"]],
    pattern:{log:"[09:20] Wi-Fi: CONNECTED\n[09:21] Local Gateway: REACHABLE\n[09:22] Internet Gateway: UNREACHABLE",question:"Apa kemungkinan area gangguan berdasarkan log?",options:["Jalur gateway menuju internet","Layar ponsel pengguna","Kamera laptop"],answer:0},
    abstraction:{question:"Informasi mana yang membantu membedakan masalah Wi-Fi dan masalah akses internet?",options:["Wi-Fi tersambung tetapi internet gateway tidak terjangkau","Nama jaringan menggunakan huruf kapital","Jumlah aplikasi di ponsel"],answer:0},
    algorithm:["MULAI","Pastikan perangkat terhubung ke Wi-Fi","Periksa akses ke gateway lokal","Periksa status internet gateway","Catat hasil pengujian","Laporkan gangguan jalur internet"]
  },
  {
    day:3,title:"Data Synchronization Error",description:"Data pada dua perangkat tidak menunjukkan pembaruan yang sama.",
    components:[["Perangkat A","Mengirim perubahan data"],["Perangkat B","Menerima pembaruan"],["Layanan sinkronisasi","Mengatur pertukaran data"],["Koneksi","Menghubungkan kedua perangkat"]],
    pattern:{log:"[10:30] Device A: UPDATE SENT\n[10:31] Sync Service: RETRY\n[10:32] Device B: OLD DATA",question:"Bagian mana yang paling berkaitan dengan kegagalan pembaruan?",options:["Layanan sinkronisasi perlu diperiksa","Kecerahan layar perangkat B","Jenis keyboard perangkat A"],answer:0},
    abstraction:{question:"Fakta apa yang paling penting untuk ditelusuri?",options:["Perangkat B masih menampilkan data lama","Perangkat A memakai casing hitam","Kedua perangkat berbeda ukuran"],answer:0},
    algorithm:["MULAI","Bandingkan data pada kedua perangkat","Periksa status layanan sinkronisasi","Periksa catatan percobaan ulang","Catat waktu pembaruan terakhir","Verifikasi sinkronisasi setelah perbaikan"]
  },
  {
    day:3,title:"Central System Recovery",description:"Beberapa layanan kota digital perlu diperiksa setelah gangguan terpusat.",
    components:[["Server pusat","Menyediakan layanan utama"],["Database","Menyimpan informasi"],["Jaringan","Menghubungkan layanan"],["Monitoring","Memantau kondisi sistem"]],
    pattern:{log:"[14:00] Central Server: ONLINE\n[14:01] Database: ONLINE\n[14:02] One Service: DEGRADED\n[14:03] Monitoring: ALERT",question:"Apa tindakan analisis yang paling tepat?",options:["Identifikasi layanan yang berstatus degraded","Mengganti semua perangkat sekaligus","Mengabaikan peringatan monitoring"],answer:0},
    abstraction:{question:"Informasi mana yang harus diprioritaskan dalam laporan pemulihan?",options:["Layanan tertentu masih berstatus degraded","Warna ikon dashboard","Jumlah wallpaper yang tersimpan"],answer:0},
    algorithm:["MULAI","Periksa status server pusat","Periksa status database","Identifikasi layanan degraded","Catat hasil monitoring dan laporkan","Verifikasi layanan yang dipulihkan"]
  }
];

const STORAGE_KEY = "fixitCityProgressV2";
let progress = loadProgress();
let currentMissionIndex = 0;
let energy = 100;
let score = 0;
let timeLeft = 300;
let timerInterval = null;
let currentPhase = 1;
let phaseLocked = false;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.completed)) return saved;
  } catch (error) {}
  return { completed: [], totalXP: 0 };
}
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}
function openMissions() {
  renderMissionBoard();
  showScreen("missionSelect");
}
function backToMissions() {
  clearInterval(timerInterval);
  timerInterval = null;
  openMissions();
}
function renderMissionBoard() {
  const list = document.getElementById("missionList");
  const completedCount = progress.completed.length;
  document.getElementById("progressText").textContent = `${completedCount} / 9 MISI`;
  document.getElementById("totalXP").textContent = `${progress.totalXP} XP`;
  document.getElementById("progressBar").style.width = `${completedCount / 9 * 100}%`;
  list.innerHTML = "";
  for (let day = 1; day <= 3; day++) {
    const group = document.createElement("div");
    group.className = "day-group";
    const title = document.createElement("h2");
    title.className = "day-title";
    title.textContent = `DAY 0${day} / ${day === 1 ? "NETWORK FOUNDATION" : day === 2 ? "SYSTEM DIAGNOSTICS" : "CITYWIDE RECOVERY"}`;
    group.appendChild(title);
    const grid = document.createElement("div");
    grid.className = "mission-grid";
    missions.forEach((mission, index) => {
      if (mission.day !== day) return;
      const done = progress.completed.includes(index);
      const unlocked = index === 0 || progress.completed.includes(index - 1);
      const card = document.createElement("article");
      card.className = `mission-card${unlocked ? "" : " locked"}`;
      const status = document.createElement("div");
      status.className = "status";
      status.textContent = done ? "✓ COMPLETED" : unlocked ? "● UNLOCKED" : "🔒 LOCKED";
      const heading = document.createElement("h3");
      heading.textContent = `${String(index + 1).padStart(2, "0")}. ${mission.title}`;
      const desc = document.createElement("p");
      desc.textContent = mission.description;
      const button = document.createElement("button");
      button.textContent = done ? "PLAY AGAIN" : unlocked ? "START MISSION →" : "LOCKED";
      button.disabled = !unlocked;
      button.addEventListener("click", () => startMission(index));
      card.append(status, heading, desc, button);
      grid.appendChild(card);
    });
    group.appendChild(grid);
    list.appendChild(group);
  }
}
function startMission(index) {
  currentMissionIndex = index;
  energy = 100;
  score = 0;
  timeLeft = 300;
  currentPhase = 1;
  phaseLocked = false;
  clearInterval(timerInterval);
  const mission = missions[index];
  document.getElementById("day").textContent = String(mission.day).padStart(2, "0");
  document.getElementById("missionNumber").textContent = `MISSION ${String(index + 1).padStart(2, "0")} / 09`;
  document.getElementById("missionTitle").textContent = mission.title;
  document.getElementById("missionDescription").textContent = mission.description;
  updateDashboard();
  showScreen("game");
  renderDecomposition();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateDashboard();
    if (timeLeft <= 0) endGame(false, "Waktu misi habis. Baca kembali petunjuk dan coba lagi.");
  }, 1000);
}
function updateDashboard() {
  document.getElementById("energy").textContent = energy;
  document.getElementById("score").textContent = score;
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  document.getElementById("timer").textContent = `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}
function phaseShell(title, instruction, body) {
  document.getElementById("phaseContent").innerHTML = `
    <div class="phase-card">
      <h2>${title}</h2>
      <p>${instruction}</p>
      ${body}
      <div id="feedback" aria-live="polite"></div>
    </div>`;
}
function renderDecomposition() {
  phaseLocked = false;
  const mission = missions[currentMissionIndex];
  const targets = [...new Set(mission.components.map(item => item[1]))];
  const shuffled = mission.components.map((item, index) => ({name:item[0], target:item[1], id:index}))
    .sort(() => Math.random() - 0.5);
  phaseShell("01 / DECOMPOSITION","Seret setiap komponen ke fungsi yang sesuai.",`
    <div class="component-list" id="components">
      ${shuffled.map(item => `<div class="component" draggable="true" data-id="${item.id}">${item.name}</div>`).join("")}
    </div>
    <div class="drop-grid">
      ${targets.map(target => `<div class="drop-zone" data-target="${target}"><h4>${target}</h4><div class="placed-list"></div></div>`).join("")}
    </div>`);
  activateDragAndDrop();
}
function activateDragAndDrop() {
  let dragged = null;
  document.querySelectorAll(".component").forEach(item => {
    item.addEventListener("dragstart", event => {
      dragged = item;
      event.dataTransfer.setData("text/plain", item.dataset.id);
    });
  });
  document.querySelectorAll(".drop-zone").forEach(zone => {
    zone.addEventListener("dragover", event => { event.preventDefault(); zone.classList.add("over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("over"));
    zone.addEventListener("drop", event => {
      event.preventDefault();
      zone.classList.remove("over");
      if (phaseLocked) return;
      const id = Number(event.dataTransfer.getData("text/plain"));
      const itemData = missions[currentMissionIndex].components[id];
      const element = document.querySelector(`.component[data-id="${id}"]`);
      if (!itemData || !element) return;
      if (zone.dataset.target === itemData[1]) {
        const placed = document.createElement("span");
        placed.className = "placed";
        placed.textContent = `✓ ${itemData[0]}`;
        zone.querySelector(".placed-list").appendChild(placed);
        element.remove();
        score += 20;
        updateDashboard();
        if (document.querySelectorAll(".component").length === 0) {
          phaseLocked = true;
          showFeedback("Bagus! Semua komponen berhasil dikelompokkan.", true);
          setTimeout(() => { currentPhase = 2; renderPattern(); }, 900);
        }
      } else {
        loseEnergy(8, "Belum tepat. Perhatikan kembali fungsi komponen tersebut.");
      }
    });
  });
}
function renderPattern() {
  phaseLocked = false;
  const q = missions[currentMissionIndex].pattern;
  phaseShell("02 / PATTERN RECOGNITION","Baca log sistem dan temukan pola kerusakan yang paling sesuai.",`
    <div class="question"><pre>${q.log}</pre></div>
    <h3>${q.question}</h3>
    <div id="patternOptions">${q.options.map((option,i) => `<button class="option" onclick="answerChoice('pattern',${i})">${String.fromCharCode(65+i)}. ${option}</button>`).join("")}</div>`);
}
function renderAbstraction() {
  phaseLocked = false;
  const q = missions[currentMissionIndex].abstraction;
  phaseShell("03 / ABSTRACTION","Pilih informasi penting dan abaikan detail yang tidak berkaitan.",`
    <div class="question"><h3>${q.question}</h3></div>
    <div id="abstractionOptions">${q.options.map((option,i) => `<button class="option" onclick="answerChoice('abstraction',${i})">${String.fromCharCode(65+i)}. ${option}</button>`).join("")}</div>`);
}
function answerChoice(type, choice) {
  if (phaseLocked) return;
  const q = missions[currentMissionIndex][type];
  const container = document.getElementById(type === "pattern" ? "patternOptions" : "abstractionOptions");
  container.querySelectorAll("button").forEach(button => button.disabled = true);
  if (choice === q.answer) {
    phaseLocked = true;
    score += 50;
    updateDashboard();
    showFeedback("Tepat! Analisis kamu benar.", true);
    setTimeout(() => {
      if (type === "pattern") { currentPhase = 3; renderAbstraction(); }
      else { currentPhase = 4; renderAlgorithm(); }
    }, 900);
  } else {
    container.querySelectorAll("button").forEach(button => button.disabled = false);
    loseEnergy(10, "Belum tepat. Cermati kembali informasi pada soal.");
  }
}
function renderAlgorithm() {
  phaseLocked = false;
  const correct = missions[currentMissionIndex].algorithm;
  const shuffled = [...correct].sort(() => Math.random() - 0.5);
  phaseShell("04 / ALGORITHM","Susun langkah troubleshooting dari awal sampai akhir. Seret blok untuk mengubah urutan.",`
    <div class="block-list" id="blockList">${shuffled.map((block,i) => `<div class="code-block" draggable="true" data-index="${i}">${block}</div>`).join("")}</div>
    <button onclick="checkAlgorithm()">CHECK ALGORITHM →</button>`);
  activateBlockSorting();
}
function activateBlockSorting() {
  const list = document.getElementById("blockList");
  let dragged = null;
  list.querySelectorAll(".code-block").forEach(block => {
    block.addEventListener("dragstart", () => { dragged = block; block.classList.add("dragging"); });
    block.addEventListener("dragend", () => block.classList.remove("dragging"));
    block.addEventListener("dragover", event => {
      event.preventDefault();
      if (!dragged || dragged === block) return;
      const rect = block.getBoundingClientRect();
      const after = event.clientY > rect.top + rect.height / 2;
      list.insertBefore(dragged, after ? block.nextSibling : block);
    });
  });
}
function checkAlgorithm() {
  if (phaseLocked) return;
  const blocks = [...document.querySelectorAll(".code-block")].map(el => el.textContent.trim());
  const correct = missions[currentMissionIndex].algorithm;
  if (JSON.stringify(blocks) === JSON.stringify(correct)) {
    phaseLocked = true;
    score += 100;
    updateDashboard();
    showFeedback("Excellent! Urutan algoritma sudah benar.", true);
    setTimeout(() => endGame(true), 900);
  } else {
    loseEnergy(15, "Urutannya belum tepat. Periksa alur dari langkah pertama sampai terakhir.");
  }
}
function loseEnergy(amount, message) {
  energy = Math.max(0, energy - amount);
  updateDashboard();
  showFeedback(message, false);
  if (energy <= 0) {
    phaseLocked = true;
    setTimeout(() => endGame(false, "Energi habis. Pelajari kembali proses analisis dan coba lagi."), 500);
  }
}
function showFeedback(message, success) {
  const feedback = document.getElementById("feedback");
  if (!feedback) return;
  feedback.className = `feedback ${success ? "good" : "bad"}`;
  feedback.textContent = message;
}
function endGame(success, message = "") {
  clearInterval(timerInterval);
  timerInterval = null;
  phaseLocked = true;
  showScreen("result");
  const title = document.getElementById("resultTitle");
  const paragraph = document.getElementById("resultMessage");
  const badge = document.getElementById("resultBadge");
  if (success) {
    const wasCompleted = progress.completed.includes(currentMissionIndex);
    if (!wasCompleted) {
      progress.completed.push(currentMissionIndex);
      progress.completed.sort((a,b) => a-b);
      progress.totalXP += score;
      saveProgress();
    }
    title.textContent = "MISSION COMPLETE!";
    paragraph.textContent = `Misi "${missions[currentMissionIndex].title}" berhasil diselesaikan. Kota semakin dekat dengan pemulihan!`;
    badge.textContent = currentMissionIndex === 8 ? "🏆 FIX-IT CITY SAVIOR" : "🏅 MISSION CLEARED";
  } else {
    title.textContent = "MISSION FAILED!";
    paragraph.textContent = message || "Misi belum berhasil. Coba lagi dan gunakan petunjuk yang tersedia.";
    badge.textContent = "🔧 KEEP LEARNING, TECHNICIAN!";
  }
  document.getElementById("finalScore").textContent = `${score} XP`;
}
