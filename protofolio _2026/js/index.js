function openSection(id) {
  // hide field cards
  document.getElementById("fields").style.display = "none";

  // hide all detail sections
  const sections = document.querySelectorAll(".detail-section");
  sections.forEach(sec => sec.style.display = "none");

  // show selected section
  document.getElementById(id).style.display = "block";
  window.scrollTo(0, 0);
}

function goBack() {
  // hide all detail sections
  const sections = document.querySelectorAll(".detail-section");
  sections.forEach(sec => sec.style.display = "none");

  // show field cards
  document.getElementById("fields").style.display = "flex";
  window.scrollTo(0, 0);
}


