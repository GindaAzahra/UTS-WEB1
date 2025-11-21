// ===== DATA KONTEN =====
const infoData = [
  {
    id: 1,
    title: "Profil Perusahaan",
    desc: "Tentang Ginzz Fashion dan perjalanan brand.",
    img: "img/company.jpg",
    content: `
      <h3 class="fw-bold text-primary">Profil Perusahaan</h3>
      <p>
        Ginzz Fashion adalah brand fashion lokal yang menghadirkan koleksi modern, elegan, dan nyaman digunakan. 
        Berdiri dengan konsep affordable luxury, Ginzz Fashion berkomitmen untuk memberikan produk berkualitas 
        tinggi yang terjangkau bagi seluruh masyarakat Indonesia.
      </p>
      <p>
        Dengan tim kreatif anak muda Indonesia, Ginzz Fashion terus berinovasi menghadirkan koleksi terbaru 
        sesuai tren dan kebutuhan pelanggan.
      </p>
    `
  },

  {
    id: 2,
    title: "Visi & Misi",
    desc: "Arah dan tujuan besar Ginzz Fashion.",
    img: "img/vision.jpg",
    content: `
      <h3 class="fw-bold text-primary">Visi</h3>
      <p>
        Menjadi brand fashion lokal terdepan yang mampu menghadirkan produk berkualitas tinggi dengan desain modern 
        serta harga terjangkau.
      </p>

      <h3 class="fw-bold text-primary mt-3">Misi</h3>
      <ul>
        <li>Menghadirkan koleksi fashion sesuai tren global.</li>
        <li>Memberikan pengalaman belanja cepat, mudah, dan nyaman.</li>
        <li>Mengutamakan kualitas bahan dan proses produksi.</li>
        <li>Mendukung tenaga kreatif lokal Indonesia.</li>
        <li>Memperluas jangkauan produk ke seluruh Indonesia.</li>
      </ul>
    `
  },

  {
    id: 3,
    title: "Produk",
    desc: "Koleksi busana dan aksesoris unggulan Ginzz Fashion.",
    img: "img/product.jpg",
    content: `
      <h3 class="fw-bold text-primary">Koleksi Produk</h3>
      <div class="row g-4 mt-2">

        <div class="col-md-4">
          <div class="card product-card">
            <img src="img/product1.jpg" class="card-img-top" alt="Dress">
            <div class="card-body">
              <h6 class="fw-bold">Elegant Soft Dress</h6>
              <p class="small">Dress premium berbahan silky soft.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-card">
            <img src="img/product2.jpg" class="card-img-top" alt="Handbag">
            <div class="card-body">
              <h6 class="fw-bold">Mini Luxury Handbag</h6>
              <p class="small">Tas kulit premium warna soft pink.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-card">
            <img src="img/product3.jpg" class="card-img-top" alt="Shoes">
            <div class="card-body">
              <h6 class="fw-bold">Women's Shoes</h6>
              <p class="small">Sepatu nyaman untuk aktivitas harian.</p>
            </div>
          </div>
        </div>

      </div>
    `
  },

  {
    id: 4,
    title: "Kontak & Customer Service",
    desc: "Cara menghubungi layanan pelanggan Ginzz Fashion.",
    img: "img/kontak.jpg",
    content: `
      <h3 class="fw-bold text-primary">Hubungi Customer Service</h3>

      <p><b>WhatsApp:</b> <a href="https://wa.me/6281234567890" target="_blank">+62 812-3456-7890</a></p>

      <p><b>Instagram:</b> @ginzz.fashion</p>

      <p><b>Email:</b> support@ginzzfashion.com</p>
    `
  },

  {
    id: 5,
    title: "Testimoni Pelanggan",
    desc: "Pendapat pelanggan setia Ginzz Fashion.",
    img: "img/testimoni.jpg",
    content: `
      <h3 class="fw-bold text-primary">Testimoni Pelanggan</h3>

      <div class="p-3 bg-white rounded shadow-sm mb-3">
        ⭐⭐⭐⭐⭐ <br>
        <b>Ayu, Bandung</b>
        <p>Bajunya nyaman banget dipakai! Bahannya adem dan jahitannya rapi.</p>
      </div>

      <div class="p-3 bg-white rounded shadow-sm mb-3">
        ⭐⭐⭐⭐⭐ <br>
        <b>Nadya, Jakarta</b>
        <p>Pengiriman cepat, tasnya lucu banget! Warnanya sama seperti foto.</p>
      </div>

      <div class="p-3 bg-white rounded shadow-sm mb-3">
        ⭐⭐⭐⭐⭐ <br>
        <b>Salsa, Surabaya</b>
        <p>Sepatunya enak dipakai seharian tanpa pegal. Recommended!</p>
      </div>
    `
  },

  {
    id: 6,
    title: "FAQ",
    desc: "Pertanyaan yang sering ditanyakan pelanggan.",
    img: "img/FAQ.jpg",
    content: `
      <h3 class="fw-bold text-primary">Frequently Asked Questions (FAQ)</h3>

      <h5 class="mt-3">1. Apakah produk bisa ditukar?</h5>
      <p>Ya, bisa ditukar jika ukuran tidak sesuai (maksimal 2 hari setelah barang diterima).</p>

      <h5 class="mt-3">2. Pengiriman pakai ekspedisi apa?</h5>
      <p>Menggunakan JNE, J&T, SiCepat, dan AnterAja.</p>

      <h5 class="mt-3">3. Apakah tersedia COD?</h5>
      <p>Ya, COD tersedia di kota-kota tertentu.</p>

      <h5 class="mt-3">4. Apakah produk selalu ready stock?</h5>
      <p>90% produk ready stock kecuali koleksi limited edition.</p>
    `
  }
];

// ===== HELPERS =====
function saveUser(user) {
  localStorage.setItem('user_' + user.email, JSON.stringify(user));
}
function getUserByEmail(email) {
  const raw = localStorage.getItem('user_' + email);
  return raw ? JSON.parse(raw) : null;
}
function setLoggedIn(email) {
  localStorage.setItem('loggedIn', email);
}
function getLoggedIn() {
  return localStorage.getItem('loggedIn');
}
function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}

// ===== RENDER & LOGIC =====
document.addEventListener("DOMContentLoaded", () => {
  // RENDER INDEX (list)
  const list = document.getElementById("infoList");
  if (list) {
    list.innerHTML = infoData.map(item => `
      <div class="col-md-6">
        <div class="info-box p-3 h-100">
          <img src="${item.img}" class="info-img mb-3" alt="${item.title}" />
          <h5>${item.title}</h5>
          <p>${item.desc}</p>
          <a href="detail.html?id=${item.id}" class="btn btn-pink">Baca Detail</a>
        </div>
      </div>
    `).join("");
    // jika user sudah login, ubah tombol nav
    const logged = getLoggedIn();
    if (logged) {
      const navActions = document.getElementById('navActions');
      if (navActions) {
        const user = getUserByEmail(logged);
        navActions.innerHTML = `
          <span class="me-3">Hi, <b>${user ? user.name : 'Pengguna'}</b></span>
          <a href="home.html" class="btn btn-outline-pink me-2">Dashboard</a>
          <button id="navLogout" class="btn btn-outline-pink">Logout</button>
        `;
        const navLogout = document.getElementById('navLogout');
        if (navLogout) navLogout.addEventListener('click', logout);
      }
    }
    return;
  }

  // RENDER DETAIL
  const detailTitle = document.getElementById('detailTitle');
  if (detailTitle) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = infoData.find(d => String(d.id) === String(id));
    if (data) {
      detailTitle.innerText = data.title;
      document.getElementById("detailContent").innerHTML = data.content;
    } else {
      document.getElementById("detailContent").innerHTML = "<p>Informasi tidak ditemukan.</p>";
    }
    return;
  }

  // REGISTER
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value;

      if (!name || !email || !password) {
        alert('Silakan isi semua kolom.');
        return;
      }

      if (getUserByEmail(email)) {
        alert('Email sudah terdaftar. Silakan login.');
        return;
      }

      const user = { name, email, password };
      saveUser(user);
      alert('Pendaftaran berhasil. Silakan login.');
      window.location.href = 'login.html';
    });
    return;
  }

  // LOGIN
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;

      const user = getUserByEmail(email);
      if (user) {
        if (user.password === password) {
          setLoggedIn(email);
          window.location.href = 'home.html';
        } else {
          alert('Password salah. Coba lagi.');
        }
      } else {
        alert('Email belum terdaftar. Silakan daftar terlebih dahulu.');
      }
    });
    return;
  }

  // HOME (Dashboard)
  const welcome = document.getElementById('welcome');
  if (welcome) {
    const email = getLoggedIn();
    if (!email) {
      window.location.href = 'login.html';
      return;
    }
    const user = getUserByEmail(email);

    welcome.innerHTML = `
      <div class="d-flex flex-column flex-md-row align-items-start gap-3">
        <div class="flex-grow-1">
          <h2 class="mb-1">Selamat datang, ${user ? user.name : 'Pengguna'}!</h2>
          <p class="lead mb-0">Senang bertemu lagi! Berikut ringkasan akun kamu di Ginzz Fashion.</p>
        </div>

        <div class="text-end">
          <p class="mb-1 small text-muted">Akun:</p>
          <p class="mb-0 fw-bold">${user ? user.email : ''}</p>
          <button id="smallLogoutBtn" class="btn btn-outline-pink btn-sm mt-3">Logout</button>
        </div>
      </div>
    `;

    // bind logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    const smallLogoutBtn = document.getElementById('smallLogoutBtn');
    if (smallLogoutBtn) smallLogoutBtn.addEventListener('click', logout);

    // update nav area
    const navUserArea = document.getElementById('navUserArea');
    if (navUserArea && user) {
      navUserArea.innerHTML = `
        <span class="me-3">Hi, <b>${user.name}</b></span>
        <a href="index.html" class="btn btn-outline-pink me-2">Informasi</a>
        <button id="logoutBtn" class="btn btn-outline-pink">Logout</button>
      `;
      const newLogout = document.getElementById('logoutBtn');
      if (newLogout) newLogout.addEventListener('click', logout);
    }

    return;
  }

  // fallback
});
