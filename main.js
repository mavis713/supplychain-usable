// 初始化轮播图
const swiper = new Swiper('.hero-slider', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 统计数字动画
function animateNumbers() {
    // 可以添加数字动画效果
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    animateNumbers();
}); 