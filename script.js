// 📦 Studydock Download Counter Script
// Tracks download counts for each semester or subject using localStorage

// 🔹 Function to increase download count
function countDownload(subject) {
  // Get current count (or 0 if not found)
  let count = parseInt(localStorage.getItem(subject)) || 0;

  // Increment the counter
  count++;

  // Save new count to localStorage
  localStorage.setItem(subject, count);

  // Update text on the webpage (if element exists)
  const counter = document.getElementById(subject + "-count");
  if (counter) {
    counter.innerText = "Downloads: " + count;
  }
}

// 🔹 Function to load saved counts on page load
function loadDownloadCounts() {
  const counters = document.querySelectorAll("span[id$='-count']");

  counters.forEach(span => {
    const id = span.id.replace("-count", "");
    const count = parseInt(localStorage.getItem(id)) || 0;
    span.innerText = "Downloads: " + count;
  });
}

// 🔹 Run when page fully loads
window.addEventListener("load", loadDownloadCounts);
