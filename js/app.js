var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.querySelector('.help');
if (isMobile) {
    element.style.display = 'flex';
} else {
    element.style.display = 'none';
}