function downloadImage() {
    let link = document.createElement("a");
    let image = document.getElementById("image");
    link.download = "img/img.jpg";
    link.href = image.src;
    link.click();
  }