const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('#mobileMenu');

menuOpen.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  mobileMenu.style.display = 'flex';
  // hide hamburger
  menuOpen.classList.add('hide'); 
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  mobileMenu.style.display = 'none';
  // show hamburger again
  menuOpen.classList.remove('hide'); 
});


// form js
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("firstName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const msg = document.getElementById("message").value.trim();

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation checks
  if (!first || !email || !msg) {
    alert("Please fill all required fields!");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  if (phone && !/^\d+$/.test(phone)) {
    alert("Phone number should contain digits only!");
    return;
  }

  alert("Message sent successfully!");
  console.log({ first, email, phone, msg });

  // Reset form after success
  this.reset();
});


document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

