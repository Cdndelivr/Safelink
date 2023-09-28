function showVerifyBox() {
  var btnscroll = document.getElementById("robotscroll");
  var verifyBox = document.getElementById("verify");
  btnscroll.classList.remove("hidden");
  verifyBox.classList.remove("hidden");
  var rbtscrollElement = document.getElementById("rbtscrollbtn");
  var robotElement = document.getElementById("robot");

  if (rbtscrollElement) {
    var anchor = document.createElement('a');
    anchor.setAttribute('class', 'sec-btn sec-anim');
    anchor.setAttribute('href', '#robot');
    anchor.textContent = "Dual Tap Rapidly👆";
    rbtscrollElement.innerHTML = '';
    rbtscrollElement.appendChild(anchor);
  }
  if (robotElement) {
    var anchor = document.createElement('a');
    anchor.setAttribute('class', 'sec-btn sec-anim');
    anchor.setAttribute('href', 'javascript:openSite()');
    anchor.textContent = "I'm not a Robot";
    robotElement.innerHTML = '';
    robotElement.appendChild(anchor);
  }
}
