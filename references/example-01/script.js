/**
 * 壮观网页交互脚本
 * 功能：
 * 1. 鼠标移动时，动态更新首屏光晕的中心位置
 * 2. 滚动时，为带有 .reveal 类的元素添加淡入动画
 */

// ========== 动态光晕效果（跟随鼠标） ==========
const hero = document.getElementById('hero');
if (hero) {
    const handleMouseMove = (e) => {
        // 获取鼠标在 hero 区域内的相对位置 (百分比)
        const rect = hero.getBoundingClientRect();
        let x = ((e.clientX - rect.left) / rect.width) * 100;
        let y = ((e.clientY - rect.top) / rect.height) * 100;
        // 限制范围 0-100
        x = Math.min(100, Math.max(0, x));
        y = Math.min(100, Math.max(0, y));
        // 设置 CSS 自定义属性，用于伪元素中的 radial-gradient
        hero.style.setProperty('--mouse-x', `${x}%`);
        hero.style.setProperty('--mouse-y', `${y}%`);
    };
    hero.addEventListener('mousemove', handleMouseMove);
    // 初始默认中心
    hero.style.setProperty('--mouse-x', '50%');
    hero.style.setProperty('--mouse-y', '40%');
}

// ========== 滚动触发动画 (Intersection Observer) ==========
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // 可选择取消观察，避免重复触发
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }); // 阈值20% 触发

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// 确保页面加载后，如果某些元素已经可见（如快速滚动），也添加上 active
// 简单一次性检查（因为 observer 会在观察时立即触发一次）
window.addEventListener('load', () => {
    // 手动触发一次检查（可选）
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('active');
            revealObserver.unobserve(el);
        }
    });
});

// 平滑滚动（给所有锚点链接添加平滑行为）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});