console.log('Theme switcher file loaded');

function setupThemeChanger() {
    console.log('Setting up theme changer');
    const themeButton = document.querySelector('.aux-nav-list-item a[href="#"]');
    
    if (!themeButton) {
        console.log('Theme button not found');
        return;
    }

    console.log('Found theme button:', themeButton.textContent);
    
    themeButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Theme button clicked');
        
        let themeSelect = document.getElementById('theme-select');
        
        if (!themeSelect) {
            themeSelect = document.createElement('select');
            themeSelect.id = 'theme-select';
            themeSelect.innerHTML = `
                <option value="lime">Lime</option>
                <option value="midnight">Midnight</option>
                <option value="pink">Pink</option>
                <option value="blue">Blue</option>
            `;
            
            themeSelect.style.cssText = `
                display: inline-block;
                background: transparent;
                border: 2px solid currentColor;
                border-radius: 9999px;
                padding: 4px 8px;
                margin-left: 8px;
                cursor: pointer;
                font-family: inherit;
                color: inherit;
            `;
            
            themeSelect.addEventListener('change', function() {
                console.log('Theme selected:', this.value);
                document.body.setAttribute('data-theme', this.value);
                
                const stylesheet = document.querySelector('link[href*="just-the-docs"]');
                if (stylesheet) {
                    let newHref = stylesheet.href.split('?')[0] + '?color_scheme=' + this.value;
                    stylesheet.href = newHref;
                    localStorage.setItem('theme-preference', this.value);
                }
            });
            
            themeButton.parentNode.appendChild(themeSelect);
            
            // Set initial theme
            const savedTheme = localStorage.getItem('theme-preference') || 'lime';
            themeSelect.value = savedTheme;
            themeSelect.dispatchEvent(new Event('change'));
        }
    });
}

// Try to set up immediately
document.addEventListener('DOMContentLoaded', setupThemeChanger);

// Also try after a short delay in case the button is added dynamically
setTimeout(setupThemeChanger, 1000);