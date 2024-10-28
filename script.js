 // Form Validation
 document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission
  
    let formData = new FormData(this);  // Create form data object
    
    fetch('https://formspree.io/f/xvgozbon', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response) {
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('There was an error sending your message.');
      }
    }).catch(function(error) {
      alert('There was a problem sending the message.');
    });
  });
  
   // Smooth Scrolling for navigation
   const navLinks = document.querySelectorAll('nav a');
  
   navLinks.forEach(link => {
       link.addEventListener('click', function (e) {
           e.preventDefault();
           const targetSection = document.querySelector(this.getAttribute('href'));
           targetSection.scrollIntoView({ behavior: 'smooth' });
       });
   });
  
   // Mobile Navigation Toggle
   const header = document.querySelector('header');
   const nav = header.querySelector('nav');
  
   header.addEventListener('click', function (e) {
       if (e.target.tagName === 'A' && window.innerWidth <= 995) {
           nav.classList.toggle('active');
       }
   });
  
   // Animation on Scroll
   const sections = document.querySelectorAll('section');
  
   window.addEventListener('scroll', function () {
       const scrollPosition = window.pageYOffset;
  
       sections.forEach(section => {
           if (section.offsetTop - window.innerHeight / 1.3 < scrollPosition) {
               section.classList.add('visible');
           }
       });
   });
  
   // Initial animations on page load
   window.addEventListener('load', function () {
       document.querySelector('.home').classList.add('visible');
   });
  
   document.addEventListener('DOMContentLoaded', function () {
       const nav = document.querySelector('nav');
       const links = document.querySelectorAll('nav a');
       const underline = document.createElement('div');
       underline.classList.add('underline');
       nav.appendChild(underline);
  
       function updateUnderline() {
           const activeLink = document.querySelector('nav a.active');
           if (activeLink) {
               const linkRect = activeLink.getBoundingClientRect();
               const navRect = nav.getBoundingClientRect();
               underline.style.width = `${linkRect.width}px`;
               underline.style.left = `${linkRect.left - navRect.left}px`;
           }
       }
  
       links.forEach(link => {
           link.addEventListener('click', function () {
               links.forEach(l => l.classList.remove('active'));
               this.classList.add('active');
               updateUnderline();
           });
       });
  
       window.addEventListener('resize', updateUnderline);
       window.addEventListener('scroll', () => {
           // Optionally, update underline position based on scroll
           const sections = document.querySelectorAll('section');
           let currentSection = '';
           
           sections.forEach(section => {
               const sectionTop = section.offsetTop - 50;
               if (scrollY >= sectionTop) {
                   currentSection = section.getAttribute('id');
               }
           });
  
           links.forEach(link => {
               link.classList.remove('active');
               if (link.getAttribute('href').includes(currentSection)) {
                   link.classList.add('active');
                   updateUnderline();
               }
           });
       });
  
       // Initialize underline on page load
       updateUnderline();
   });
  
  
   // Toggle the visibility of the resume form
  document.getElementById('request-resume-btn').addEventListener('click', function() {
    const form = document.getElementById('resume-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });
  
  // Handle the form submission with Formspree
  document.getElementById('resume-request-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
  
    let formData = new FormData(this);  // Get form data
  
    fetch('https://formspree.io/f/xrbgeaqn', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response) {
      if (response.ok) {
        alert('Your resume request has been sent successfully!');
      } else {
        alert('There was an error sending your request.');
      }
    }).catch(function(error) {
      alert('There was a problem sending the request.');
    });
  
    // Optionally, hide the form after submission
    document.getElementById('resume-form').style.display = 'none';
  });
  