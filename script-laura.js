function testVirker() {
  setTimeout(myFunction, 2000)
  function myFunction() {
    document.getElementById('popup_laura').style.display = "block";
  }

}

function lukPopup() {
  document.getElementById('popup_laura').style.display = "none";
}
