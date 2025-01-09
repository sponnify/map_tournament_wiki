document.addEventListener('DOMContentLoaded', function() {
    const themeLink = document.querySelector('.aux-nav-list-item a[href="#"]');
    if (!themeLink) return;
  
    const themeSelect = document.createElement('select');
    themeSelect.className = 'theme-select';
    themeSelect.innerHTML = `
      <option value="lime">Lime</option>
      <option value="midnight">Midnight</option>
      <option value="pink">Pink</option>
      <option value="blue">Blue</option>
    `;
  
    themeSelect.style.cssText = `
      font-family: "Reddit Mono", monospace;
      background: transparent;
      color: inherit;
      border: 2px solid currentColor;
      border-radius: 9999px;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      margin-left: 0.5rem;
    `;
  
    themeSelect.addEventListener('change', function(e) {
      const theme = e.target.value;
      const link = document.querySelector('link[rel="stylesheet"]');
      const href = link.href.split('?')[0] + '?color_scheme=' + theme;
      link.href = href;
      localStorage.setItem('theme-preference', theme);
    });
  
    const listItem = themeLink.parentElement;
    listItem.appendChild(themeSelect);
    themeLink.style.display = 'none';
  
    const savedTheme = localStorage.getItem('theme-preference') || 'lime';
    themeSelect.value = savedTheme;
    const event = new Event('change');
    themeSelect.dispatchEvent(event);
  });