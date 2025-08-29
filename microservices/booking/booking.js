document.getElementById("distance").addEventListener("input", function() {
  let dist = parseFloat(this.value);
  if (!isNaN(dist)) {
    document.getElementById("price").value = "₹ " + (dist * 15);
  }
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const trackingId = "RJC" + Math.floor(Math.random() * 100000);
  document.getElementById("result").textContent =
    "Booking Confirmed! Tracking ID: " + trackingId;
});
