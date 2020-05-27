
  function turnoff()  {
    var img = document.getElementById("myanh");
    img.src = "pic_bulboff.gif";
  }

  function turnon()  {
    var img = document.getElementById("myanh");
    img.src = "pic_bulbon.gif";
  }

  function turn() {
    var image = document.getElementById("bong2");
    
    if (image.src.match("bulbon")) {
      image.src = "pic_bulboff.gif";
    } else {
      image.src = "pic_bulbon.gif";
    }
  }