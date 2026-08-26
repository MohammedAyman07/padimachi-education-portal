// Disable right click
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable copy, cut, paste, inspect, and save
document.onkeydown = e => {
  if (e.ctrlKey && ['u', 's', 'c', 'x', 'p'].includes(e.key)) e.preventDefault();
  if (e.key === 'PrintScreen') alert('Screenshots are disabled!');
};

// Disable text selection and dragging
document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.webkitUserDrag = 'none';

// Auto-add favicon to all pages
(function() {
  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/x-icon";
  favicon.href = "favicon.ico";  // Change path if needed
  document.head.appendChild(favicon);
})();

// Add watermark
const watermark = document.createElement('div');
watermark.innerText = 'PadiMachi';
watermark.style.position = 'fixed';
watermark.style.top = '50%';
watermark.style.left = '50%';
watermark.style.transform = 'translate(-50%, -50%) rotate(-30deg)';
watermark.style.fontSize = '5rem';
watermark.style.color = 'rgba(0,0,0,0.05)';
watermark.style.pointerEvents = 'none';
watermark.style.zIndex = '9999';
document.body.appendChild(watermark);

// --- NEW: Add Footer Dynamically ---
// This code creates the footer and adds it to the bottom of the body
const footer = document.createElement('footer');
const footerText = document.createElement('p');

// MODIFIED: Added an "About Us" link using innerHTML
footerText.innerHTML = '© 2025 PadiMachi  All Rights Reserved. | <a href="about-us.html">About Us</a>';

footer.appendChild(footerText);
document.body.appendChild(footer);