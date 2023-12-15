const myFunction = () => {
    let x = document.getElementById("nav");
    let y = document.getElementsByClassName("icon");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.color = "black";
    } else {
        x.style.display = "block";
    }
}

const mql = window.matchMedia("(min-width: 1025px)");

mql.onchange = (e) => {
  let x = document.getElementById("nav");
  let y = document.querySelector("icon");  
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
};