document.addEventListener('DOMContentLoaded', () => {
  const subsCard = document.getElementById('subsCard');

  const billingTabs = subsCard ? subsCard.querySelectorAll('.billing-tab') : [];
  const plans = subsCard ? subsCard.querySelectorAll('.plan') : [];
  const chooseBtn = document.getElementById('chooseBtn');

  const prepaidCard = document.querySelector('.pricing-card.prepaid');
  const prepaidChoices = prepaidCard ? prepaidCard.querySelectorAll('.minute-pill, .plan.prepaid-choice') : [];

  const lang = document.documentElement.lang || 'fr';

  const billedAnnuallyByLang = {
    fr: 'Facturé annuellement',
    en: 'Billed annually',
    de: 'Jährlich abgerechnet'
  };

  const billedAnnuallyText = billedAnnuallyByLang[lang] || billedAnnuallyByLang.fr;

  const activeTab = subsCard ? subsCard.querySelector('.billing-tab.is-active') : null;
  let billing = activeTab ? activeTab.dataset.billing : 'monthly';
  let selectedPlan = null;
  let selectedPrepaid = null;

  function applyBilling() {
    plans.forEach(plan => {
      const priceVal = plan.querySelector('.price-val');
      const hint = plan.querySelector('.plan-hint');
      if (!priceVal) return;

      const monthly = plan.dataset.monthly;
      const annual = plan.dataset.annual;

      if (billing === 'annual') {
        priceVal.textContent = annual;
        if (hint) hint.textContent = billedAnnuallyText;
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
      billing = tab.dataset.billing || 'monthly';
      applyBilling();
    });
  });

  plans.forEach(plan => {
    plan.addEventListener('click', () => {
      plans.forEach(p => p.classList.remove('is-selected'));
      plan.classList.add('is-selected');
      selectedPlan = plan.dataset.plan;

      prepaidChoices.forEach(el => el.classList.remove('is-selected'));
      selectedPrepaid = null;

      if (chooseBtn) {
        chooseBtn.textContent = chooseBtn.dataset.textSelected;
      }
    });

    plan.addEventListener('mouseenter', () => {
      if (chooseBtn) {
        chooseBtn.textContent = chooseBtn.dataset.textSelected;
      }
    });

    plan.addEventListener('mouseleave', () => {
      if (chooseBtn && !selectedPlan) {
        chooseBtn.textContent = chooseBtn.dataset.textDefault;
      }
    });
  });

  prepaidChoices.forEach(el => {
    el.addEventListener('click', () => {
      prepaidChoices.forEach(x => x.classList.remove('is-selected'));
      el.classList.add('is-selected');
      selectedPrepaid = el;

      plans.forEach(p => p.classList.remove('is-selected'));
      selectedPlan = null;

      if (chooseBtn) {
        chooseBtn.textContent = chooseBtn.dataset.textDefault;
      }
    });
  });

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
const pathParts = window.location.pathname.split('/').filter(Boolean);

const currentLang = pathParts[0] || 'fr';
const currentFile = pathParts[1] || 'index.html';

const pageMap = {
  'index.html': {
    fr: 'index.html',
    en: 'index.html',
    de: 'index.html'
  },
  'a_propos.html': {
    fr: 'a_propos.html',
    en: 'about.html',
    de: 'about.html'
  },
  'about.html': {
    fr: 'a_propos.html',
    en: 'about.html',
    de: 'about.html'
  },
  'tarifs.html': {
    fr: 'tarifs.html',
    en: 'pricing.html',
    de: 'preise.html'
  },
  'pricing.html': {
    fr: 'tarifs.html',
    en: 'pricing.html',
    de: 'preise.html'
  },
  'preise.html': {
    fr: 'tarifs.html',
    en: 'pricing.html',
    de: 'preise.html'
  },
  'securite.html': {
    fr: 'securite.html',
    en: 'security.html',
    de: 'sicherheit.html'
  },
  'security.html': {
    fr: 'securite.html',
    en: 'security.html',
    de: 'sicherheit.html'
  },
  'sicherheit.html': {
    fr: 'securite.html',
    en: 'security.html',
    de: 'sicherheit.html'
  },
  'contact.html': {
    fr: 'contact.html',
    en: 'contact.html',
    de: 'contact.html'
  },
  'demo.html': {
    fr: 'demo.html',
    en: 'demo.html',
    de: 'demo.html'
  },
  'faq.html': {
    fr: 'faq.html',
    en: 'faq.html',
    de: 'faq.html'
  },
  'legal.html': {
    fr: 'legal.html',
    en: 'legal.html',
    de: 'legal.html'
  }
};

function updateLanguageUrl(newLang) {
  const targetFile =
    pageMap[currentFile]?.[newLang] || 'index.html';

  window.location.href = `/${newLang}/${targetFile}`;
}

document.querySelectorAll('.lang-link').forEach(link => {
  const lang = link.getAttribute('href').split('/')[1];

  link.classList.toggle('active', lang === currentLang);

  link.addEventListener('click', e => {
    e.preventDefault();
    updateLanguageUrl(lang);
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
// contact email link
document.addEventListener('DOMContentLoaded', function() {
  const user = "hello";
  const domain = "swisstranscript.ch";
  const email = `${user}@${domain}`;
    
  document.querySelectorAll(".contact-email-section").forEach(el => {      
    el.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  });
  
  document.querySelectorAll(".contact-email-link").forEach(el => {
    el.href = `mailto:${email}`;
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
      const annualMonthly = p.getAttribute('data-annual');

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

    chooseBtn.textContent = selectedPlan ? 'Choisir cet abonnement' : 'Choisir un abonnement';
  }

  billingTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      billingTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      billing = tab.getAttribute('data-billing') || 'monthly';
      applyBilling();
    });
  });

  plans.forEach(p => {
    p.addEventListener('click', () => setSelected(p.getAttribute('data-plan')));

    p.addEventListener('mouseenter', () => { chooseBtn.textContent = 'Choisir cet abonnement'; });
    p.addEventListener('mouseleave', () => {
      chooseBtn.textContent = selectedPlan ? 'Choisir cet abonnement' : 'Choisir un abonnement';
    });
  });

  applyBilling();
  setSelected(''); 
});
