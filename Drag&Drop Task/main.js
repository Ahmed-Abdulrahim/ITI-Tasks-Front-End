let images = document.querySelectorAll("img");
let topBox = document.querySelector(".top");
let botBox = document.querySelector(".bot");

images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("myimg", e.target.outerHTML);
  });

  image.addEventListener("dragend", (e) => {
    e.target.remove();
    e.target.style.display = "none";
  });
});

botBox.addEventListener("dragenter", (e) => {
  e.preventDefault();
  e.target.style.backgroundColor = "lightgreen";
});

botBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

botBox.addEventListener("dragleave", (e) => {
  e.target.style.backgroundColor = "pink";
});

botBox.addEventListener("drop", (e) => {
  e.preventDefault();
  botBox.innerHTML += e.dataTransfer.getData("myimg");

  e.target.style.backgroundColor = "";

  if (topBox.querySelectorAll("img").length - 1 === 0) {
    topBox.textContent = "empty";
  }
});
