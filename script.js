// const menuToggle = document.getElementById("menu-toggle");
//   const navMenu = document.getElementById("nav-menu");

//   menuToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//     menuToggle.classList.toggle("open");
//   });


//   document.querySelectorAll(".nav-links a").forEach((link) => {
//     link.addEventListener("click", () => {
//       navMenu.classList.remove("active");
//       menuToggle.classList.remove("open");
//     });
//   });


let humburger = document.querySelector(".humburger");
let closed_icon = document.querySelector(".closed_icon")

humburger.addEventListener(click, () =>{
  console.log("humburger clicked")
  humburger.style.display : "block"
})


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("firstName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const msg = document.getElementById("message").value.trim();

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation checks
  if (!first || !email || !msg) {
    alert("Please fill all fields");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (phone && !/^\d+$/.test(phone)) {
    alert("Phone number should contain digits only");
    return;
  }

  alert("Message sent successfully");
  console.log({ first, email, phone, msg });

 
  this.reset();
});


document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

