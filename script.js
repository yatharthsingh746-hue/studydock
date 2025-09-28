function countDownload(subject) {
  let count = localStorage.getItem(subject) || 0;
  count++;
  localStorage.setItem(subject, count);
  document.getElementById(subject + "-count").innerText = "Downloads: " + count;
}

window.onload = function() {
  document.querySelectorAll("span[id$='-count']").forEach(span => {
    let id = span.id.replace("-count", "");
    let count = localStorage.getItem(id) || 0;
    span.innerText = "Downloads: " + count;
  });
}