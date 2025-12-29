const quizModal = document.getElementById("quizModal");
const openQuiz = document.getElementById("openQuiz");
const closeQuiz = document.getElementById("closeQuiz");

openQuiz.onclick = () => quizModal.style.display = "block";
closeQuiz.onclick = () => quizModal.style.display = "none";

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("formMsg");

  if (!name || !email) {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent! We'll get back to you.";
    msg.style.color = "lightgreen";
    this.reset();
  }
});
// Booking form
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = bname.value;
  const service = document.getElementById("service").value;
  const msg = document.getElementById("bookingMsg");

  if (!name || !service) {
    msg.textContent = "Please complete all booking fields.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Booking confirmed!";
    msg.style.color = "lightgreen";
    this.reset();
  }
});

// Product filter
document.getElementById("filter").addEventListener("change", function() {
  const value = this.value;
  document.querySelectorAll(".product").forEach(p => {
    p.style.display = value === "all" || p.classList.contains(value)
      ? "block"
      : "none";
  });
});
