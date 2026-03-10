function openNav() {
  document.getElementById("mobileNav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mobileNav").style.width = "0";
}

document.getElementById("scrollBtn").addEventListener("click", function () {
  document.getElementById("sectionOne").scrollIntoView({
    behavior: "smooth",
  });
});
