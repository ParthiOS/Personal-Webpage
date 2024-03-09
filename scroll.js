document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                smoothScrollTo(targetElement.offsetTop, 1000); // 1000ms = 1 second
            }
        });
    });
});

function smoothScrollTo(endPos, duration) {
    const startPos = window.scrollY || document.documentElement.scrollTop;
    const distance = endPos - startPos;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextScrollPos = easeInOutQuad(timeElapsed, startPos, distance, duration);

        window.scrollTo(0, nextScrollPos);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}
