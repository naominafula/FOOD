// Tab Switching Interaction
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Handle Reservation Form Submission
document.getElementById('reservationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Table Reservation Request Received!');
});

// Handle Newsletter Form Submission
document.getElementById('newsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for subscribing!');
});