function applyStyles() {
    const badges = document.querySelectorAll('span.Label');
    badges.forEach(badge => {
        const text = badge.textContent.trim();
        if (text === 'Public') {
            badge.style.border = '2px solid green';
            badge.style.color = 'green';
        } else if (text === 'Private') {
            badge.style.border = '2px solid red';
            badge.style.color = 'red';
        }
    });
}

applyStyles();

let debounceTimer;
const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applyStyles, 300);
});
observer.observe(document.body, { childList: true, subtree: true });
