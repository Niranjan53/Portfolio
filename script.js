// Mobile menu toggler
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
}

// Close mobile menu when clicking outside (optional)
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobile-menu');
  const ham = document.querySelector('.hamburger-icon');
  if (!menu || !ham) return;
  const isClickInside = menu.contains(e.target) || ham.contains(e.target);
  if (!isClickInside) menu.classList.add('hidden');
});

// Gentle parallax for non-touch desktop
(function () {
  const profile = document.querySelector('.profile');
  if (!profile) return;
  // set default variables (used if you extend to transform pseudo)
  profile.style.setProperty('--parallax-x', '0px');
  profile.style.setProperty('--parallax-y', '0px');

  // only on pointer devices
  if ('ontouchstart' in window) return;

  profile.addEventListener('mousemove', (e) => {
    const rect = profile.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    // subtle movement
    const px = (x - 0.5) * 14;
    const py = (y - 0.5) * 8;
    profile.style.setProperty('--parallax-x', `${px}px`);
    profile.style.setProperty('--parallax-y', `${py}px`);
  });

  profile.addEventListener('mouseleave', () => {
    profile.style.setProperty('--parallax-x', '0px');
    profile.style.setProperty('--parallax-y', '0px');
  });
})();


// Reveal email & phone on icon click
document.addEventListener("DOMContentLoaded", () => {

  // EMAIL
  const emailBtn = document.getElementById("showEmailBtn");
  const email = document.getElementById("emailDisplay");

  emailBtn.addEventListener("click", () => {
    email.classList.toggle("show");
  });

  // PHONE
  const phoneBtn = document.getElementById("showPhoneBtn");
  const phone = document.getElementById("phoneDisplay");

  phoneBtn.addEventListener("click", () => {
    phone.classList.toggle("show");
  });
});
