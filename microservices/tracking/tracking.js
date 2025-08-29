function track() {
  const id = document.getElementById("trackId").value;
  let statuses = ["Pending Pickup", "In Warehouse", "Shipped", "Delivered"];
  if (id.startsWith("RJC")) {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    document.getElementById("status").textContent = "Status: " + status;
  } else {
    document.getElementById("status").textContent = "Invalid Tracking ID";
  }
}
