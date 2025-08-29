// Booking
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const sender = document.getElementById("sender").value;
  const phone = document.getElementById("phone").value;
  const receiver = document.getElementById("receiver").value;
  const distance = document.getElementById("distance").value;
  const price = distance * 15;
  const trackingId = "RJC" + Math.floor(Math.random() * 10000);

  document.getElementById("bookingResult").innerText =
    `Booking Confirmed! \nSender: ${sender}, Phone: ${phone}, Receiver: ${receiver}, Price: ₹${price}, Tracking ID: ${trackingId}`;
});

// Tracking
document.getElementById("trackingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const trackingId = document.getElementById("trackingId").value;
  const statuses = ["Pending Pickup", "In Warehouse", "Shipped", "Delivered"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  document.getElementById("trackingResult").innerText =
    `Tracking ID: ${trackingId}\nCurrent Status: ${randomStatus}`;
});

// Contact
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! We will get back to you shortly.");
  this.reset();
});
