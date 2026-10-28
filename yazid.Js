// التأكد من تحميل العناصر قبل التشغيل document.addEventListener('DOMContentLoaded', () => {
// تفعيل الانتقال السلس عند النقر على روابط القائمة
const navLinks = document.querySelectorAll('.nav-links a, .hero-buttons a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

console.log("Yazid Portfolio Smooth Scroll Loaded Successfully!");

