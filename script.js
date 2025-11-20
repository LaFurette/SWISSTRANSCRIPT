const toggleButton = document.getElementById("toggleDrawer");
const drawer = document.querySelector(".drawer");
const overlay = document.querySelector(".drawer-overlay");

document.querySelectorAll(".drawer-btn").forEach((item) => {
  item.addEventListener("click", () => {
    drawer.classList.toggle("-translate-x-full");
    drawer.classList.toggle("-translate-x-0");
    overlay.classList.toggle("hidden");
  });
});

toggleButton.addEventListener("click", () => {
  drawer.classList.toggle("-translate-x-full");
  drawer.classList.toggle("-translate-x-0");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  drawer.classList.toggle("-translate-x-full");
  drawer.classList.toggle("-translate-x-0");
  overlay.classList.toggle("hidden");
});

// SCROLL TO TOP BUTTON
document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const footer = document.getElementById('footer');

  function adjustButtonPosition() {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (window.innerWidth >= 1024 && footerRect.top <= windowHeight) {
      scrollToTopBtn.style.bottom = `${windowHeight - footerRect.top + 20}px`;
    } else {
      scrollToTopBtn.style.bottom = '24px';
    }
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.remove('opacity-0');
      scrollToTopBtn.classList.add('opacity-100');
    } else {
      scrollToTopBtn.classList.remove('opacity-100');
      scrollToTopBtn.classList.add('opacity-0');
    }
    adjustButtonPosition();
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  adjustButtonPosition();
});

// DROPDOWN LANGUE
const currentLang = window.location.pathname.split('/')[1] || 'fr';

const pageMap = {
  fr: {
    'index': '',
    'tarifs': 'tarifs',
    'preise': 'tarifs',
    'pricing': 'tarifs',
    'faq': 'faq',
    'legal': 'legal',
    'securite': 'securite',
    'sicherheit': 'securite',
    'security': 'securite'
  },
  de: {
    'index': '',
    'tarifs': 'preise',
    'pricing': 'preise',
    'faq': 'faq',
    'legal': 'legal',
    'securite': 'sicherheit',
    'security': 'sicherheit'
  },
  en: {
    'index': '',
    'tarifs': 'pricing',
    'preise': 'pricing',
    'faq': 'faq',
    'legal': 'legal',
    'securite': 'security',
    'sicherheit': 'security'
  }
};

const currentPage = window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2].replace('.html', '') : 'index';

function updateLanguageUrl(newLang) {
  const newPage = pageMap[newLang][currentPage] || 'index';
  const newUrl = `/${newLang}/${newPage === 'index' ? '' : `${newPage}.html`}`;
  window.location.href = newUrl;
}

document.querySelectorAll('.lang-link').forEach(link => {
  const lang = link.getAttribute('href').split('/')[1];
  if (lang === currentLang) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }

  link.addEventListener('click', function (e) {
    e.preventDefault();
    const newLang = this.getAttribute('href').split('/')[1];
    updateLanguageUrl(newLang);
  });
});

// FAQ
document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', function () {
      this.classList.toggle('active');
      const answer = this.nextElementSibling;
      answer.classList.toggle('show');
    });
  });
});

// RESTER INFORME
const wrap = document.querySelector(".notify-wrap");
const toggle = document.getElementById("notifyToggle");

toggle.addEventListener("click", () => {
  wrap.classList.toggle("open");
});
