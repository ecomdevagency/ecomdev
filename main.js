document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initCurrencyConverter();
});

function initCustomCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const dot = document.createElement('div');
  dot.classList.add('custom-cursor-dot');
  
  const ring = document.createElement('div');
  ring.classList.add('custom-cursor-ring');
  
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animate() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  const hoverables = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .cursor-pointer');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('hovered');
      ring.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('hovered');
      ring.classList.remove('hovered');
    });
  });
}

async function initCurrencyConverter() {
  const currencyElements = document.querySelectorAll('.currency-converter');
  if (currencyElements.length === 0) return;

  // Helper for safe localStorage access
  const safeGet = (key) => { try { return localStorage.getItem(key); } catch(e) { return null; } };
  const safeSet = (key, val) => { try { localStorage.setItem(key, val); } catch(e) {} };

  try {
    // 1. Get User's Currency
    let userCurrency = safeGet('userCurrency');
    
    if (!userCurrency) {
      try {
        const geoRes = await fetch('https://ipapi.co/json/');
        const geoData = await geoRes.json();
        userCurrency = geoData.currency;
      } catch (e) {
        console.warn('IP location fetch failed, falling back to system locale.');
        // Fallback to system currency if API is blocked (e.g. by AdBlock or CORS on file://)
        try {
          userCurrency = Intl.NumberFormat().resolvedOptions().currency;
        } catch(err) {
          userCurrency = 'AED';
        }
      }
      userCurrency = userCurrency || 'AED';
      safeSet('userCurrency', userCurrency);
    }

    // 2. Get Exchange Rates (Base AED)
    let rates = null;
    try {
      rates = JSON.parse(safeGet('currencyRates'));
    } catch(e) {}
    
    const ratesTimestamp = safeGet('currencyRatesTimestamp');
    const now = new Date().getTime();

    // Cache rates for 12 hours
    if (!rates || !ratesTimestamp || (now - ratesTimestamp > 12 * 60 * 60 * 1000)) {
      try {
        const ratesRes = await fetch('https://open.er-api.com/v6/latest/AED');
        const ratesData = await ratesRes.json();
        rates = ratesData.rates;
        safeSet('currencyRates', JSON.stringify(rates));
        safeSet('currencyRatesTimestamp', now.toString());
      } catch (e) {
        console.error('Failed to fetch exchange rates:', e);
        return; // Abort conversion if we can't get rates
      }
    }

    const rate = rates[userCurrency];
    if (!rate) return;

    // 3. Update Elements
    const formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: userCurrency,
      maximumFractionDigits: 0
    });

    currencyElements.forEach(el => {
      // We assume data-amount is always in AED
      const baseAmount = parseFloat(el.getAttribute('data-amount'));
      const format = el.getAttribute('data-format');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      if (isNaN(baseAmount)) return;

      let convertedAmount = baseAmount * rate;
      
      if (format === 'M') {
        convertedAmount = convertedAmount / 1000000;
        const parts = formatter.formatToParts(1);
        const symbol = parts.find(p => p.type === 'currency')?.value || userCurrency + ' ';
        el.textContent = `${prefix}${symbol}${convertedAmount.toFixed(0)}M+${suffix}`;
      } else {
        el.textContent = `${prefix}${formatter.format(convertedAmount)}${suffix}`;
      }
    });

  } catch (error) {
    console.error('Error in currency converter:', error);
  }
}

