/* ── AgentForge AI – Main JS ── */

'use strict';

/* ════════════════════════════════════
   1. NETWORK CANVAS BACKGROUND
   ════════════════════════════════════ */
(function initCanvas() {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [], animId;

  const COUNT  = 60;
  const RADIUS = 2.5;
  const SPEED  = 0.35;
  const LINK_D = 140;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createNodes() {
    nodes = [];
    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - .5) * SPEED,
        vy: (Math.random() - .5) * SPEED,
        r: RADIUS * (.6 + Math.random() * .8),
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_D) {
          const alpha = (1 - dist / LINK_D) * 0.45;
          const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          grad.addColorStop(0, `rgba(99,102,241,${alpha})`);
          grad.addColorStop(1, `rgba(6,182,212,${alpha})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(129,140,248,.7)';
      ctx.fill();
    });
  }

  function update() {
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });
  }

  function loop() {
    update();
    draw();
    animId = requestAnimationFrame(loop);
  }

  resize();
  createNodes();
  loop();

  let ro = new ResizeObserver(() => {
    resize();
    createNodes();
  });
  ro.observe(canvas.parentElement);
})();


/* ════════════════════════════════════
   2. NAVBAR SCROLL EFFECT
   ════════════════════════════════════ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const btn    = document.getElementById('mobileMenuBtn');
  const menu   = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    const open = menu.classList.contains('open');
    btn.querySelectorAll('span')[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
    btn.querySelectorAll('span')[1].style.opacity   = open ? '0' : '1';
    btn.querySelectorAll('span')[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });

  // Close mobile menu on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '1';
      });
    });
  });
})();


/* ════════════════════════════════════
   3. SCROLL REVEAL
   ════════════════════════════════════ */
(function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  items.forEach(el => observer.observe(el));
})();


/* ════════════════════════════════════
   4. COUNTER ANIMATION
   ════════════════════════════════════ */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    const target  = parseInt(el.dataset.count, 10);
    const suffix  = el.dataset.suffix || '';
    const dur     = 2000;
    const start   = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / dur, 1);
      const current  = Math.round(easeOut(progress) * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => observer.observe(el));
})();


/* ════════════════════════════════════
   5. SMOOTH ACTIVE NAV HIGHLIGHT
   ════════════════════════════════════ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + entry.target.id) {
            a.style.color = 'var(--text)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
})();


/* ════════════════════════════════════
   6. WORKFLOW LINE ANIMATION (Stagger)
   ════════════════════════════════════ */
(function initWorkflow() {
  const diagram = document.querySelector('.workflow-diagram');
  if (!diagram) return;

  const steps = diagram.querySelectorAll('.wf-step');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        steps.forEach((step, i) => {
          setTimeout(() => {
            step.style.opacity    = '1';
            step.style.transform  = 'translateY(0)';
          }, i * 180);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  steps.forEach(step => {
    step.style.opacity   = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  observer.observe(diagram);
})();


/* ════════════════════════════════════
   7. ANALYTICS BAR ANIMATION
   ════════════════════════════════════ */
(function initAnalyticsBars() {
  const analyticsFull = document.querySelector('.analytics-full');
  if (!analyticsFull) return;

  const fills = analyticsFull.querySelectorAll('.af-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach((fill, i) => {
          const target = fill.style.width;
          fill.style.width = '0%';
          setTimeout(() => { fill.style.width = target; }, i * 200 + 300);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(f => { f.dataset.w = f.style.width; f.style.width = '0%'; });
  observer.observe(analyticsFull);
})();


/* ════════════════════════════════════
   8. PLATFORM CARD HOVER 3D TILT
   ════════════════════════════════════ */
(function initTilt() {
  document.querySelectorAll('.platform-card, .pricing-card, .testimonial-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const rot   = 5;
      card.style.transform = `perspective(800px) rotateY(${dx * rot}deg) rotateX(${-dy * rot}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .4s ease';
    });
  });
})();


/* ════════════════════════════════════
   9. TYPING ANIMATION FOR HERO SUBTITLE
   ════════════════════════════════════ */
(function initTypingCycle() {
  const words = ['Leads', 'Customers', 'Bookings', 'Support', 'Revenue'];
  let current = 0;
  const target = document.querySelector('.hero-headline .gradient-text');
  if (!target) return;

  // Leave the headline as is, only animate words array subtitle if desired
  // Keeping the hero static for clean design
})();


/* ════════════════════════════════════
   10. PARALLAX GLOW
   ════════════════════════════════════ */
(function initParallax() {
  const glows = document.querySelectorAll('.hero-glow');

  window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - .5) * 2;
    const y = (e.clientY / window.innerHeight - .5) * 2;

    glows.forEach((glow, i) => {
      const intensity = (i + 1) * 12;
      glow.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
    });
  }, { passive: true });
})();


/* ════════════════════════════════════
   11. SMOOTH ANCHOR SCROLL
   ════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ════════════════════════════════════
   12. SCROLL PROGRESS BAR (Top)
   ════════════════════════════════════ */
(function initProgressBar() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    height: 2px;
    width: 0%;
    background: linear-gradient(90deg, #6366f1, #22d3ee);
    z-index: 9999;
    transition: width .1s linear;
    pointer-events: none;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
})();
