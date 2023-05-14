let Projects = {
  "project-1": [
    "/chat/chat-home.png",
    "/chat/chat-about.png",
    "/chat/chat-login.png",
  ],
  "project-2": [
    "/chat/chat-home.png",
    "/chat/chat-about.png",
    "/chat/chat-login.png",
  ],
};

let images = document.querySelectorAll("img");
images.forEach((i) => i.addEventListener("click", OpenImage));

function OpenImage(e) {
  console.log(this);
  e.preventDefault();
  window.location.href = e.target.src;
}

let buttons = document.querySelectorAll("button");
buttons.forEach((b) => b.addEventListener("click", SwitchImage));

function SwitchImage(e) {
  let project = e.target.getAttribute("data-id");
  let direction = e.target.getAttribute("data-move");
  let image = document.getElementById(project);
  let images = Projects[project];
  let currentImage = image.src.split("/").pop();
  let currentImageIndex = images.indexOf(
    images.find((i) => i.includes(currentImage))
  );
  console.log(currentImageIndex);
  if (direction == "prev") {
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    currentImageIndex = newIndex;
    image.src = "/content/images" + images[newIndex];
  } else {
    let newIndex = currentImageIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    currentImageIndex = newIndex;
    image.src = "/content/images" + images[newIndex];
  }
  console.log(currentImage, currentImageIndex, images[currentImageIndex]);
}
