const body = document.body;

function flash() {
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }
  setTimeout(flash, 100);
}

flash();
