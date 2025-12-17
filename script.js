document.addEventListener('DOMContentLoaded', () => {
  const billingTabs = document.querySelectorAll('.billing-tab');
  const plans = document.querySelectorAll('.plan');
  const chooseBtn = document.getElementById('chooseBtn');

  let billing = 'monthly';
  let selectedPlan = null;

  /* ======================
     SWITCH MENSUEL / ANNUEL
  ====================== */
  function applyBilling() {
    plans.forEach(plan => {
      const priceVal = plan.querySelector('.price-val');
      const hint = plan.querySelector('.plan-hint');

      const monthly = plan.dataset.monthly;
      const annual = plan.dataset.annual;

      if (!priceVal) return;

      if (billing === 'annual') {
        priceVal.textContent = annual;
        if (hint) hint.textContent = 'Facturé annuellement';
      } else {
        priceVal.textContent = monthly;
        if (hint) hint.textContent = '';
      }
    });
  }

  billingTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      billingTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      billing = tab.dataset.billing;
      applyBilling();
    });
  });

  /* ======================
     SÉLECTION DES ABOS
     (checkbox-like mais radio)
  ====================== */
  plans.forEach(plan => {
    plan.addEventListener('click', () => {
      // Désélectionner tous les plans
      plans.forEach(p => p.classList.remove('is-selected'));

      // Sélectionner celui cliqué
      plan.classList.add('is-selected');
      selectedPlan = plan.dataset.plan;

      // Changer le texte du bouton
      if (chooseBtn) {
        chooseBtn.textContent = 'Choisir cet abonnement';
      }
    });

    // Hover : change le texte temporairement
    plan.addEventListener('mouseenter', () => {
      if (chooseBtn) chooseBtn.textContent = 'Choisir cet abonnement';
    });

    plan.addEventListener('mouseleave', () => {
      if (chooseBtn && !selectedPlan) {
        chooseBtn.textContent = 'Choisir un abonnement';
      }
    });
  });

  // Initialisation
  applyBilling();
});



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


document.addEventListener('DOMContentLoaded', () => {
  const billingTabs = document.querySelectorAll('.billing-tab');
  const plans = document.querySelectorAll('.plan');
  const chooseBtn = document.getElementById('chooseBtn');
  const chosenPlanInput = document.getElementById('chosenPlan');
  const chosenBillingInput = document.getElementById('chosenBilling');

  let billing = 'monthly';
  let selectedPlan = '';

  function applyBilling() {
    plans.forEach(p => {
      const valEl = p.querySelector('.price-val');
      const hintEl = p.querySelector('.plan-hint');
      const monthly = p.getAttribute('data-monthly');
      const annualMonthly = p.getAttribute('data-annual'); // prix / mois même en annuel

      if (billing === 'annual') {
        valEl.textContent = annualMonthly;
        hintEl.textContent = 'Facturé annuellement';
      } else {
        valEl.textContent = monthly;
        hintEl.textContent = '';
      }
    });

    if (chosenBillingInput) chosenBillingInput.value = billing;
  }

  function setSelected(planId) {
    selectedPlan = planId;

    plans.forEach(p => {
      p.classList.toggle('is-selected', p.getAttribute('data-plan') === planId);
    });

    if (chosenPlanInput) chosenPlanInput.value = planId;

    // bouton -> “Choisir cet abonnement” si un plan est sélectionné
    chooseBtn.textContent = selectedPlan ? 'Choisir cet abonnement' : 'Choisir un abonnement';
  }

  // Switch billing
  billingTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      billingTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      billing = tab.getAttribute('data-billing') || 'monthly';
      applyBilling();
    });
  });

  // Select plan (checkbox-like but single selection = radio)
  plans.forEach(p => {
    p.addEventListener('click', () => setSelected(p.getAttribute('data-plan')));

    // Hover changes button text too (requested)
    p.addEventListener('mouseenter', () => { chooseBtn.textContent = 'Choisir cet abonnement'; });
    p.addEventListener('mouseleave', () => {
      chooseBtn.textContent = selectedPlan ? 'Choisir cet abonnement' : 'Choisir un abonnement';
    });
  });

  // Init
  applyBilling();
  setSelected(''); // none selected by default
});
// STICKY FEATURES
// const steps = document.querySelectorAll(".feature-step");
// const img = document.getElementById("featureImage");

// let currentActiveStep = steps[0];
// let currentImage = img.src;

// steps.forEach(step => step.classList.remove("active"));
// currentActiveStep.classList.add("active");

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const newStep = entry.target;
//       const newSrc = newStep.dataset.image;

//       if (newStep === currentActiveStep) return;

//       currentActiveStep.classList.remove("active");
//       newStep.classList.add("active");
//       currentActiveStep = newStep;

//       if (newSrc !== currentImage) {
//         currentImage = newSrc;

//         img.style.transition = "opacity .6s ease, transform .6s ease";
//         img.style.opacity = 0;
//         img.style.transform = "scale(0.98)";

//         setTimeout(() => {
//           img.src = newSrc;
//           img.style.opacity = 1;
//           img.style.transform = "scale(1)";
//         }, 350);
//       }
//     }
//   });
// }, {
//   threshold: 0.85,
//   rootMargin: "-20% 0px -20% 0px"
// });

// steps.forEach(step => observer.observe(step));
