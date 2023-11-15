const container = document.querySelector('.card');
const image = container.querySelector('.Me');
const skills = document.querySelector('.Skills');


container.addEventListener('mouseenter', function() {
    image.style.opacity = '0.5';
    image.style.marginLeft = '-31.25rem';
    skills.style.display = 'block';
});

container.addEventListener('mouseleave', function() {
    image.style.opacity = '1';
    image.style.marginLeft = '0';
    skills.style.display = 'none';
});