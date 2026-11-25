document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const THEME_KEY = 'portfolioDarkMode';

    function applyTheme(isDark) {
        body.classList.toggle('dark-mode', isDark);
        if (toggleButton) {
            toggleButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
            toggleButton.setAttribute('aria-pressed', String(isDark));
        }
    }

    // Restore saved theme on load
    const savedDarkMode = localStorage.getItem(THEME_KEY) === 'true';
    applyTheme(savedDarkMode);

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const nextState = !body.classList.contains('dark-mode');
            applyTheme(nextState);
            localStorage.setItem(THEME_KEY, String(nextState));
        });
    }

    // Build and wire up lightbox modal for project gallery screenshots
    const galleryCards = document.querySelectorAll('.project-gallery .img-container');
    if (galleryCards.length > 0) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'gallery-lightbox';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Screenshot preview');
        modal.innerHTML = `
            <div class="modal-content">
                <img id="lightbox-img" src="" alt="">
                <p id="lightbox-caption" class="modal-caption"></p>
            </div>
        `;
        document.body.appendChild(modal);

        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');

        function closeLightbox() {
            modal.classList.remove('open');
            lightboxImg.src = '';
            lightboxImg.alt = '';
        }

        galleryCards.forEach((card) => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img');
                const captionEl = card.querySelector('.img-caption');
                if (!img) return;

                lightboxImg.src = img.getAttribute('src');
                lightboxImg.alt = img.getAttribute('alt') || 'Project screenshot';
                lightboxCaption.textContent = captionEl
                    ? captionEl.textContent.replace(/^Caption:\s*/i, '').trim()
                    : '';
                modal.classList.add('open');
            });
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('open')) {
                closeLightbox();
            }
        });
    }
});