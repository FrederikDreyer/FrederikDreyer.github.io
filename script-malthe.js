
function showInput() {

  let hiddenInput = document.getElementById("input_felt");


  if (hiddenInput.style.display === "inline-block") {
    hiddenInput.style.display = "none" ;
    document.getElementById("knapInput").innerHTML = 'Vis inputfelter';
  }

  else {
      hiddenInput.style.display = "inline-block" ;
      document.getElementById("knapInput").innerHTML = 'Fjern inputfelter';
  }


}
