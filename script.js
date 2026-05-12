// DOM Elements
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll(".nav-link");
const preloader = document.getElementById("preloader");

// Mobile Menu Links - ALL links in mobile menu
const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");

// PMB Elements
const pmbStatus = document.getElementById("pmb-status");
const pmbOpen = document.getElementById("pmb-open");
const pmbClosed = document.getElementById("pmb-closed");
const pmbButtons = document.getElementById("pmb-buttons");
const daftarOnlineBtn = document.getElementById("daftar-online");
const daftarOfflineBtn = document.getElementById("daftar-offline");
const instagramLink = document.getElementById("instagram-link");
const instagramLinkClosed = document.getElementById("instagram-link-closed");

// Contact Elements
const contactInstagram = document.getElementById("contact-instagram");
const contactWhatsapp = document.getElementById("contact-whatsapp");
const contactFacebook = document.getElementById("contact-facebook");

// Configuration - UBAH DI SINI
const PENDAFTARAN_BUKA = false; // true = BUKA, false = TUTUP
const GOOGLE_FORM_LINK = "#";
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/1hygfTvHimucGrv79";
const INSTAGRAM_LINK = "https://www.instagram.com/smpimanbaululum";
const WHATSAPP_LINK = "https://wa.me/6285237095076";
const FACEBOOK_LINK = "https://facebook.com";

// Scroll to Home Function
function scrollToHome() {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  mobileMenu?.classList.add("hidden");
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => (preloader.style.display = "none"), 300);
  }, 1500);

  // Mobile menu toggle
  mobileMenuBtn?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu on outside click
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 100) {
      navbar.classList.add("shadow-lg", "border-b");
    } else {
      navbar.classList.remove("shadow-lg", "border-b");
    }
  });

  // 🔥 FIXED: Smooth scrolling + CLOSE MODAL + Mobile Menu
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Close mobile menu
      mobileMenu.classList.add("hidden");

      // 🔥 TUTUP MODAL OTOMATIS
      const modal = document.getElementById("modal-canvas"); // ✅ FIXED!
      if (modal && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
      }
    });
  });

  // 🔥 FIXED: Mobile Menu Links - Close Modal + Scroll
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Close mobile menu
      mobileMenu.classList.add("hidden");

      // Tutup Modal
      const modal = document.getElementById("modal-canvas");
      if (modal && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
      }
    });
  });

  // PMB Status Check
  checkPmbStatus();

  // Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document.querySelectorAll(".about-card, .stat-card").forEach((card) => {
    observer.observe(card);
  });
});

function checkPmbStatus() {
  if (!pmbStatus || !pmbOpen || !pmbClosed) {
    console.log("PMB elements not found");
    return;
  }

  const status = PENDAFTARAN_BUKA;

  if (status) {
    // Pendaftaran BUKA
    pmbOpen.classList.remove("hidden");
    pmbClosed.classList.add("hidden");
    if (pmbButtons) {
      pmbButtons.classList.remove("hidden");
    }
  } else {
    // Pendaftaran TUTUP
    pmbOpen.classList.add("hidden");
    pmbClosed.classList.remove("hidden");
    if (pmbButtons) {
      pmbButtons.classList.add("hidden");
    }
  }
}

// PMB Event Listeners
daftarOnlineBtn?.addEventListener("click", () =>
  window.open(GOOGLE_FORM_LINK, "_blank"),
);
daftarOfflineBtn?.addEventListener("click", () =>
  window.open(GOOGLE_MAPS_LINK, "_blank"),
);
instagramLink?.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(INSTAGRAM_LINK, "_blank");
});
instagramLinkClosed?.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(INSTAGRAM_LINK, "_blank");
});

// Contact Links
contactInstagram?.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(INSTAGRAM_LINK, "_blank");
});
contactWhatsapp?.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(WHATSAPP_LINK, "_blank");
});
contactFacebook?.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(FACEBOOK_LINK, "_blank");
});

// Navbar active scroll
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    if (scrollY >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-primary", "font-bold");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-primary", "font-bold");
    }
  });
});

// Modal Content - UBAH ISI DI SINI
const modalContent = {
  tentang: {
    title: "Tentang SMPI Manba'ul Ulum Kabul",
    content: `
       <div class="p-8 space-y-8">
      <div class="text-center">
        <h3 class="text-4xl font-bold text-primary mb-6 font-cairo">
          SEJARAH KAMI
        </h3>
        <div
          class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"
        ></div>
        <p class="text-xl text-gray-700 text-justify max-w-4xl mx-auto">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-nuGreen to-nuGold"
          >
            SMP Islam Manba'ul Ulum Kabul</span
          >
          adalah lembaga pendidikan tingkat menengah pertama yang berada di
          bawah naungan yayasan pondok pesantren, yang berkomitmen membentuk
          generasi berilmu, berakhlak, dan berbudaya. Kami hadir sebagai sekolah
          Islam yang mengintegrasikan tiga pilar utama pendidikan, yaitu ilmu
          pengetahuan, nilai-nilai kepesantrenan, dan pelestarian budaya lokal.
        </p><br />
        <p class="text-xl text-gray-700 text-justify max-w-4xl mx-auto">
          Dengan latar belakang masyarakat Suku Sasak, sekolah ini berupaya
          menanamkan kecintaan terhadap budaya sebagai bagian dari identitas dan
          karakter peserta didik. Dalam proses pembelajaran, kami tidak hanya
          menekankan aspek akademik, tetapi juga pembinaan adab, pembiasaan
          ibadah, serta penguatan nilai-nilai kearifan lokal yang selaras dengan
          ajaran Islam. Siswa dibimbing untuk menjadi pribadi yang santun,
          bertanggung jawab, dan mampu berkontribusi positif di tengah
          masyarakat.
        </p><br />
        <p class="text-xl text-gray-700 text-justify max-w-4xl mx-auto">
          Sebagai sekolah berbasis pesantren dan budaya, SMP Islam Manba'ul Ulum
          Kabul memiliki berbagai program unggulan, seperti pembinaan adab
          santri, pembelajaran budaya Sasak, kegiatan seni tradisional, serta
          pelatihan komunikasi adat seperti pembayun. Seluruh program ini
          dirancang untuk membentuk generasi yang tidak hanya cerdas secara
          intelektual, tetapi juga kuat secara karakter dan berakar pada
          nilai-nilai budaya. Kami percaya bahwa pendidikan terbaik adalah
          pendidikan yang mampu menyeimbangkan antara ilmu, iman, dan identitas
          budaya. Oleh karena itu, SMP Islam Manba’ul Ulum Kabul hadir sebagai
          wadah pembinaan generasi masa depan yang berilmu, beradab, dan
          berbudaya.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-nuCream/50 p-6 rounded-2xl">
          <h4 class="text-2xl font-bold text-primary mb-4">📊 Statistik</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-4 bg-white rounded-xl">
              <div class="text-3xl font-black text-primary">1</div>
              <div class="text-sm text-gray-600">Tahun Berdiri</div>
            </div>
            <div class="text-center p-4 bg-white rounded-xl">
              <div class="text-3xl font-black text-secondary">20</div>
              <div class="text-sm text-gray-600">Siswa Aktif</div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <i class="fas fa-school text-9xl text-primary/30"></i>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/5 p-8 rounded-3xl">
        <h4 class="text-2xl font-bold text-primary mb-6">🏫 Fasilitas</h4>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-white rounded-xl shadow-md text-center">
            <i class="fas fa-book text-2xl text-emerald mb-2 block"></i>
            <h5 class="font-bold">Perpustakaan</h5>
          </div>
          <div class="p-4 bg-white rounded-xl shadow-md text-center">
            <i
              class="fas fa-chalkboard-teacher text-2xl text-secondary mb-2 block"
            ></i>
            <h5 class="font-bold">Guru Berkualitas</h5>
          </div>
          <div class="p-4 bg-white rounded-xl shadow-md text-center">
            <i class="fas fa-wifi text-2xl text-accent mb-2 block"></i>
            <h5 class="font-bold">Internet</h5>
          </div>
        </div>
      </div>
    </div>
    `,
  },
  visi: {
    title: "Visi & Misi",
    content: `
      <div class="p-8 space-y-8">
        <div class="text-center bg-gradient-to-r from-primary/10 p-12 rounded-3xl">
          <h3 class="text-4xl font-bold text-primary mb-6 font-cairo">🌟 VISI</h3>
          <blockquote class="text-xl italic text-gray-700 border-l-8 border-primary pl-6">
            "Menjadi sekolah unggulan yang menghasilkan generasi berakhlak mulia, berprestasi, serta adaptif dan berdaya saing global."
          </blockquote>
        </div>
        
        <div class="bg-nuCream/50 p-8 rounded-3xl">
          <h4 class="text-2xl font-bold text-secondary mb-6 font-cairo">🎯 MISI</h4>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-6 bg-white rounded-2xl shadow-sm">
              <span class="w-10 h-10 bg-primary text-white rounded-full inline-flex items-center justify-center font-bold text-lg">1</span>
              <h5 class="font-bold mt-3 mb-2">Integrasi Ilmu dan Akhlak</h5>
              <p class="text-gray-600">Menyelenggarakan pendidikan yang mengintegrasikan ilmu pengetahuan, iman, dan akhlak.</p>
            </div>
            <div class="p-6 bg-white rounded-2xl shadow-sm">
              <span class="w-10 h-10 bg-secondary text-white rounded-full inline-flex items-center justify-center font-bold text-lg">2</span>
              <h5 class="font-bold mt-3 mb-2">Pembiasaan Nilai-Nilai Keislaman</h5>
              <p class="text-gray-600">Menanamkan dan membiasakan nilai-nilai keislaman dalam kehidupan sehari-hari.</p>
            </div>
            <div class="p-6 bg-white rounded-2xl shadow-sm">
              <span class="w-10 h-10 bg-primary text-white rounded-full inline-flex items-center justify-center font-bold text-lg">3</span>
              <h5 class="font-bold mt-3 mb-2">Pelestarian Budaya Lokal</h5>
              <p class="text-gray-600">Mengembangkan dan melestarikan budaya lokal sebagai bagian dari pembentukan karakter peserta didik.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow-sm">
              <span class="w-10 h-10 bg-secondary text-white rounded-full inline-flex items-center justify-center font-bold text-lg">4</span>
              <h5 class="font-bold mt-3 mb-2">Pembelajaran Kreatif dan Inofatif</h5>
              <p class="text-gray-600">Meningkatkan kualitas pembelajaran yang aktif, kreatif, inovatif, dan menyenangkan.</p>
        </div>
            <div class="p-6 bg-white rounded-2xl shadow-sm">
              <span class="w-10 h-10 bg-primary text-white rounded-full inline-flex items-center justify-center font-bold text-lg">5</span>
              <h5 class="font-bold mt-3 mb-2">Pengembangan Potensi Peserta Didik</h5>
              <p class="text-gray-600">Mengembangkan potensi akademik dan non-akademik peserta didik secara optimal.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow-sm">
              <span class="w-10 h-10 bg-secondary text-white rounded-full inline-flex items-center justify-center font-bold text-lg">6</span>
              <h5 class="font-bold mt-3 mb-2">Penciptaan Lingkungan Sekolah Berkarakter</h5>
              <p class="text-gray-600">Menciptakan lingkungan sekolah yang disiplin, aman, bersih, dan berbudaya.</p>
        </div>
         <div class="p-6 bg-white rounded-2xl shadow-sm">
              <span class="w-10 h-10 bg-primary text-white rounded-full inline-flex items-center justify-center font-bold text-lg">7</span>
              <h5 class="font-bold mt-3 mb-2">Kemitraan dan Kepercayaan Masyarakat</h5>
              <p class="text-gray-600">Membangun kemitraan yang harmonis dengan orang tua, masyarakat, dan pemerintah.</p>
          </div>
        </div>

        <!-- Tujuan di sini -->
        <div class="text-center bg-gradient-to-r from-secondary/10 p-12 rounded-3xl">
          <h3 class="text-4xl font-bold text-secondary mb-6 font-cairo">🎯 TUJUAN</h3>
          <ul class="text-left text-gray-700 list-disc list-inside space-y-2">
            <li>
                Membentuk peserta didik yang beriman, bertakwa, dan berakhlak mulia.
            </li>
            <li>
                Menghasilkan lulusan yang cerdas, terampil, dan memiliki daya saing tinggi.
            </li>
            <li>
                Menumbuhkan sikap cinta terhadap budaya lokal dan mampu melestarikannya.
            </li>
            <li>
                Mengembangkan karakter disiplin, tanggung jawab, dan kemandirian.
            </li>
            <li>
                Meningkatkan prestasi sekolah di bidang akademik maupun non-akademik.
            </li>
            <li>
                Membekali peserta didik dengan keterampilan hidup (life skill) yang relevan dengan perkembangan zaman.
            </li>
            <li>
                Menjadi sekolah yang dipercaya dan menjadi kebanggaan masyarakat.
            </li>
          </ul>
        </div>
    </div>
    `,
  },
  ekstra: {
    title: "Ekstrakurikuler",
    content: `
      <div class="p-8 space-y-8">
        <div class="text-center">
          <h3 class="text-4xl font-bold text-emerald mb-6 font-cairo">🏆 KEGIATAN SERU</h3>
          <p class="text-xl text-gray-600 mb-8">Kembangkan bakat sambil belajar!</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="ekstra-card p-8 bg-gradient-to-br from-emerald/20 rounded-3xl text-center">
            <i class="fa-solid fa-landmark text-5xl text-emerald mb-4"></i>
            <h4 class="text-2xl font-bold text-gray-800 mb-2"> Kelas Pembayun Muda</h4>
            <p>
              <ul class="list-disc list-inside text-gray-600 text-left">
                <li>
                  Simulasi pembayun sederhana di kelas
                </li>
                <li>
                  Pentas pembayun di acara sekolah
                </li>
                <li>
                  Tampil di acara desa/sekolah besar
                </li>
              </ul>
            </p>
          </div>
          <div class="ekstra-card p-8 bg-gradient-to-br from-primary/20 rounded-3xl text-center">
            <i class="fa-solid fa-music text-5xl text-primary mb-4"></i>
            <h4 class="text-2xl font-bold text-gray-800 mb-2">Hadrah / Sholawat</h4>
            <p>
              <ul class="list-disc list-inside text-left text-gray-600">
                <li>
                  Tampil di kegiatan internal
                </li>
                <li>
                  Tampil di acara masyarakat
                </li>
                <li>
                  Ikut lomba / event luar
                </li>
              </ul>
            </p>
          </div>
          <div class="ekstra-card p-8 bg-gradient-to-br from-secondary/20 rounded-3xl text-center">
            <i class="fa-brands fa-artstation text-5xl text-secondary mb-4"></i>
            <h4 class="text-2xl font-bold text-gray-800 mb-2">Seni Budaya Sasak</h4>
            <p>
               <ul class="list-disc list-inside text-left text-gray-600">
                <li>
                  Pentas internal
                </li>
                <li>
                  Pentas bulanan sekolah
                </li>
                <li>
                  Tampil di event besar
                </li>
              </ul>
            </p>
          </div>
          <div class="ekstra-card p-8 bg-gradient-to-br from-muhadharah1/20 rounded-3xl text-center">
            <i class="fa-solid fa-graduation-cap text-5xl text-muhadharah1 mb-4"></i>
            <h4 class="text-2xl font-bold text-gray-800 mb-2">
              Muhadharah (Pidato)
            </h4>
            <p>
              <ul class="list-disc list-inside text-left text-gray-600">
                <li>
                  Latihan rutin
                </li>
                <li>
                  Lomba internal
                </li>
                <li>
                  Wakil lomba luar
                </li>
              </ul>
            </p>
          </div>
          <div class="ekstra-card p-8 bg-gradient-to-br from-nuGreen/20 rounded-3xl text-center">
            <i class="fa-solid fa-quran text-5xl text-nuGreen mb-4"></i>
            <h4 class="text-2xl font-bold text-gray-800 mb-2">
                Tahfidz / Al-Qur'an
            </h4>
            <p>
              <ul class="list-disc list-inside text-left text-gray-600">
                <li>
                  Setoran rutin
                </li>
                <li>
                  80% siswa konsisten hafalan
                </li>
                <li>
                  Ada siswa hafidz unggulan
                </li>
              </ul>
            </p>
          </div>
          <div class="ekstra-card p-8 bg-gradient-to-br from-nuGold/20 rounded-3xl text-center">
            <i class="fa-solid fa-star-and-crescent text-5xl text-nuGold mb-4"></i>
            <h4 class="text-2xl font-bold text-gray-800 mb-2">
                 Kaligrafi
            </h4>
            <p>
              <ul class="list-disc list-inside text-left text-gray-600">
                <li>
                  Karya sederhana
                </li>
                <li>
                  Pameran kecil
                </li>
                <li>
                  Ikut lomba kaligrafi
                </li>
              </ul>
            </p>
          </div>
          <div class="ekstra-card p-8 bg-gradient-to-br from-olahraga/20 rounded-3xl text-center">
            <i class="fa-solid fa-dumbbell text-5xl text-olahraga mb-4"></i>
            <h4 class="text-2xl font-bold text-gray-800 mb-2">
                Olahraga
            </h4>
            <p>
              <ul class="list-disc list-inside text-left text-gray-600">
                <li>
                  Disiplin latihan
                </li>
                <li>
                  Ikut pertandingan antar sekolah
                </li>
                <li>
                  Membentuk tim yang solid
                </li>
              </ul>
            </p>
          </div>
        </div>
  </div>
  `,
  },
  kegiatan: {
    title: "Galeri Kegiatan",
    content: `
      <div class="p-8">
        <h3 class="text-4xl font-bold text-primary mb-6 font-cairo text-center">📸 Momen Seru di SMPI</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-gradient-to-br from-primary/20 rounded-3xl text-center">
          <img src="https://source.unsplash.com/400x300/?school" alt="Kegiatan 1" class="w-full h-48 object-cover rounded-lg shadow-md">
          <p class="text-sm text-gray-600 mt-2">Upacara Bendera</p>
          </div>
          <div class="p-4 bg-gradient-to-br from-primary/20 rounded-3xl text-center">
            <img src="https://source.unsplash.com/400x300/?students" alt="Kegiatan 2" class="w-full h-48 object-cover rounded-lg shadow-md">
          </div>
          <div class="p-4 bg-gradient-to-br from-primary/20 rounded-3xl text-center">
            <img src="https://source.unsplash.com/400x300/?classroom" alt="Kegiatan 3" class="w-full h-48 object-cover rounded-lg shadow-md">
          </div>
        </div>
      </div>
    `,
  },
};

// Modal functionality
document.querySelectorAll(".about-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();
    const modalType = card.dataset.modal;
    const content = modalContent[modalType];
    if (content) {
      document.getElementById("modal-title").textContent = content.title;
      document.getElementById("modal-body").innerHTML = content.content;
      document.getElementById("modal-canvas").classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  });
});

// Modal Controls
document.getElementById("close-modal")?.addEventListener("click", () => {
  document.getElementById("modal-canvas").classList.add("hidden");
  document.body.style.overflow = "auto";
});

document.getElementById("modal-canvas")?.addEventListener("click", (e) => {
  if (e.target.id === "modal-canvas") {
    document.getElementById("modal-canvas").classList.add("hidden");
    document.body.style.overflow = "auto";
  }
});

// ESC Key Close Modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("modal-canvas");
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  }
});
