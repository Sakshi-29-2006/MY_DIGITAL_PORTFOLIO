let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {   
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');

            });

        }
    });
let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};
// script.js
document.querySelectorAll('.cert-img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('lightbox-img').src = img.src;
      document.getElementById('lightbox').style.display = 'flex';
    });
  });
  
  document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
  });
  
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
      document.getElementById('lightbox').style.display = 'none';
    }
  });
// Portfolio Lightbox
const portfolioLightbox = document.getElementById('portfolio-lightbox');
const portfolioLightboxImg = document.getElementById('portfolio-lightbox-img');
const portfolioClose = document.querySelector('#portfolio-lightbox .close');
const portfolioImgs = document.querySelectorAll('.portfolio-img');

portfolioImgs.forEach(img => {
  img.addEventListener('click', () => {
    portfolioLightbox.style.display = 'flex';
    portfolioLightboxImg.src = img.src;
  });
});

portfolioClose.addEventListener('click', () => {
  portfolioLightbox.style.display = 'none';
});
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () =>{
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.about-img img, .services-container, .portfolio-box, .contact .input-box', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1', {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'});
