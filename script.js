console.log("virker det");

function styleMenu() {
  if (document.getElementById('style_menu').style.display === "block") {
    document.getElementById('style_menu').style.display = "none";
  } else {
    document.getElementById('style_menu').style.display = "block";
  }
}

function myPopup() {
  let popup = document.getElementById('wrapper_popup');
  let hero = document.getElementById('hero');
  let knap = document.getElementById("popup_knap");
  if (popup.style.display === "flex") {
    popup.style.display = "none";
    hero.style.margin = "0 -10px";
    knap.innerHTML = "Se popup";
  } else {
    popup.style.display = "flex";
    hero.style.margin = "-562.398px -10px 0 -10px";
    knap.innerHTML = "Fjern popup";
  }
}

function logoLogin() {
  let logo = document.getElementById('logo_login');
  let logoKnap = document.getElementById('logo_knap')
  if (logo.style.display === "inline-block") {
    logo.style.display = "none";
    logoKnap.innerHTML = "Se logo"
  } else {
    logo.style.display = "inline-block";
    logoKnap.innerHTML = "Fjern Logo"
  }
}

function functionName3() {
 document.getElementById('baggrund_farve').style.background = "linear-gradient(180deg, rgba(230,215,192,1) 0%, rgba(179,166,145,1) 40%, rgba(99,88,71,1) 100%)";
}

function functionName4() {
 document.getElementById('login_input1').style.display = "inline-block";
 document.getElementById('login_input2').style.display = "inline-block";
}

function functionName5() {
 document.getElementById('login_knap').style.display = "inline-block";
 document.getElementById('login_tilbage_knap').style.display = "inline-block";
 document.getElementById('login_tilbage_pil').style.display = "inline-block";
}

function functionName6() {
 document.getElementById('baggrund_farve').style.fontFamily = "'Lato', sans-serif";
 document.getElementById('login_input1').style.fontFamily = "'Lato', sans-serif";
 document.getElementById('login_input2').style.fontFamily = "'Lato', sans-serif";
 document.getElementById('login_knap').style.fontFamily = "'Lato', sans-serif";
 document.getElementById('login_tilbage_knap').style.fontFamily = "'Lato', sans-serif";
 document.getElementById('kom_i_gang_btn').style.fontFamily = "'Lato', sans-serif";
}

function functionName7() {
 document.getElementById('login_side').style.display = "none";
}

function loginIgen() {
  document.getElementById('nav_styleguide').scrollIntoView();
  location.reload();
}

function functionName8() {
  document.getElementById('nav_mobil').style.opacity = "1";
}

function functionName9() {
  document.getElementById('hero').style.opacity = "1";
}

function functionName10() {
  document.getElementById('landscape_cards').style.opacity = "1";
  document.getElementById('lyd_cards').style.opacity = "1";
  document.getElementById('portrait_cards').style.opacity = "1";
  document.getElementById('kategori_cards').style.opacity = "1";
}

function functionName11() {
  let premiumCta = document.getElementById('premium_cta');
  premiumCta.style.opacity = "1";
  premiumCta.scrollIntoView();
  premiumCta.style.border = "2px red solid";
  setTimeout(borderCta, 3000);
  function borderCta() {
    premiumCta.style.border = "none";
  }
}


function navIkoner() {
  let home = document.getElementById('home_ikon');
  let sog = document.getElementById('sog_ikon');
  let person = document.getElementById('person_ikon');

  home.style.border = "2px solid red";
  sog.style.border = "2px solid red";
  person.style.border = "2px solid red";
  setTimeout(fjernBorder, 3000);

  function fjernBorder() {
    home.style.border = "none";
    sog.style.border = "none";
    person.style.border = "none";
  }
}

function hTre() {
  let sidstH3 = document.getElementById('sidst_afspillet_h3');
  let yogaH3 = document.getElementById('yoga_h3');
  let meditationH3 = document.getElementById('meditation_h3');
  let kategoriH3 = document.getElementById('kategori_h3');
  let logoKnap = document.getElementById('knap_h3')
    sidstH3.style.opacity = "1";
    yogaH3.style.opacity = "1";
    meditationH3.style.opacity = "1";
    kategoriH3.style.opacity = "1";
    sidstH3.style.borderBottom = "2px solid red";
    yogaH3.style.borderBottom = "2px solid red";
    meditationH3.style.borderBottom = "2px solid red";
    kategoriH3.style.borderBottom = "2px solid red";
      setTimeout(h3Border, 3000);
      function h3Border() {
        sidstH3.style.borderBottom = "none";
        yogaH3.style.borderBottom = "none";
        meditationH3.style.borderBottom = "none";
        kategoriH3.style.borderBottom = "none";
      }
}

function functionName15() {
  let sealleEt = document.getElementById('se_alle1');
  let sealleTo = document.getElementById('se_alle2');
  let sealleTre = document.getElementById('se_alle3');
    sealleEt.style.opacity = "1";
    sealleTo.style.opacity = "1";
    sealleTre.style.opacity = "1";
    sealleEt.style.borderBottom = "2px solid red";
    sealleTo.style.borderBottom = "2px solid red";
    sealleTre.style.borderBottom = "2px solid red";
    sealleEt.scrollIntoView();
    setTimeout(sealleBorder, 3000);
    function sealleBorder() {
      sealleEt.style.borderBottom = "none";
      sealleTo.style.borderBottom = "none";
      sealleTre.style.borderBottom = "none";
    }
  }

function hEt() {
  let h1 = document.getElementById('titel_h1');
  h1.style.borderBottom = "2px solid red";
  document.getElementById('hero').scrollIntoView();
  setTimeout(functionName19, 3000);
  function functionName19() {
    h1.style.borderBottom = "none";
  }
}

function hTo() {
  let popup = document.getElementById('wrapper_popup');
  let hero = document.getElementById('hero');
  let knap = document.getElementById("popup_knap");
  let h2 = document.getElementById('popup_h2');
  popup.style.display = "flex";
  hero.style.margin = "-562.398px -10px 0 -10px";
  h2.style.borderBottom = "2px solid red"
  setTimeout(fjernPopup, 4000);
    function fjernPopup() {
      popup.style.display = "none";
      hero.style.margin = "0 -10px";
    }
}

function hFire() {
  let h4 = document.getElementById('h4_landscape_card');
  h4.style.borderBottom = "2px solid red";
  document.getElementById('titel_h1').scrollIntoView();
  setTimeout(fjernBorder2, 5000);
  function fjernBorder2() {
    h4.style.borderBottom = "none";
  }
}

function hFem() {
  let h5 = document.getElementById('h5_landscape_card');
  h5.style.borderBottom = "2px solid red";
  document.getElementById('titel_h1').scrollIntoView();
  setTimeout(fjernBorder3, 5000);
  function fjernBorder3() {
    h5.style.borderBottom = "none";
  }
}
