var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("TopBar").style.top = "0"; 
  } else {
    document.getElementById("TopBar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}
