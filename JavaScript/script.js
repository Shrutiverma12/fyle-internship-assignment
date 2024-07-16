function addCardOnImg(id) {
  // const preImg = document.getElementById("image1");

  const imgDiv = document.getElementById(id);
  imgDiv.innerHTML = null;
  imgDiv.classList.add("read-more-card");

  const image = document.createElement("img");
  image.src = "Asset/html.png";
  image.classList.add("mt-5");

  const par = document.createElement("p");
  par.classList.add("fs-5");
  par.classList.add("mt-4");
  par.textContent = "WEB DEVELOPMENT";

  const par1 = document.createElement("p");
  par1.classList.add("text-center");
  par1.textContent =
    " Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentensque";

  const btnImg = document.createElement("img");
  btnImg.src = "/Asset/arrow.svg";

  const btn = document.createElement("button");
  btn.classList.add("submitButton");
  btn.onclick = goOnWebPage();

  // btn.type = "submit";
  btn.classList.add("btn");
  btn.classList.add("btn-light");
  btn.classList.add("m-4");
  btn.textContent = "READ MORE";

  btn.appendChild(btnImg);

  const imgContainerDiv = document.createElement("div");

  imgContainerDiv.classList.add("imgContainerDiv");
  imgContainerDiv.append(image, par, par1, btn);

  imgDiv.append(imgContainerDiv);
}

function goOnWebPage() {
  const url = "https://www.fylehq.com/";
  window.open(url, "_blank", "noopener, noreferrer");
}

function addImgAgain(url, id, imgdiv) {
  const backImg = document.createElement("img");
  backImg.src = url;
  backImg.classList.add("image");

  backImg.setAttribute("id", id);

  const imgDiv = document.getElementById(imgdiv);
  const container = document.getElementsByClassName("imgContainerDiv");

  imgDiv.innerHTML = null;
  imgDiv.append(backImg);
}

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

dot1.style.backgroundColor = "red";

const divOfImg1 = document.getElementById("image1Div");
divOfImg1.addEventListener("mouseover", (event) => {
  addCardOnImg("image1Div");
  dot1.style.backgroundColor = "red";
});

divOfImg1.addEventListener("mouseout", (event) => {
  addImgAgain("Asset/first.png", "image1", "image1Div");
  dot1.style.backgroundColor = "grey";
});
const divOfImg2 = document.getElementById("image2Div");
divOfImg2.addEventListener("mouseover", (event) => {
  addCardOnImg("image2Div");
  dot2.style.backgroundColor = "red";
  dot1.style.backgroundColor = "grey";
});
divOfImg2.addEventListener("mouseout", (event) => {
  addImgAgain("Asset/second.png", "image2", "image2Div");
  dot2.style.backgroundColor = "grey";
});
const divOfImg3 = document.getElementById("image3Div");
divOfImg3.addEventListener("mouseover", (event) => {
  addCardOnImg("image3Div");
  dot3.style.backgroundColor = "red";
  dot1.style.backgroundColor = "grey";
});
divOfImg3.addEventListener("mouseout", (event) => {
  addImgAgain("Asset/third.png", "image3", "image3Div");
  dot3.style.backgroundColor = "gray";
});

const dis1 = document.getElementById("dis1");
const dis2 = document.getElementById("dis2");
const dis3 = document.getElementById("dis3");
const container = document.getElementById("projectImagecontainer");

function changeProjectImg(url, id) {
  id.addEventListener("mouseover", function () {
    if (id != dis1) {
      dis1.style.backgroundColor = "white";
    }
    id.style.backgroundColor = "#ff3147";
  });
  id.addEventListener("mouseout", function () {
    id.style.backgroundColor = "white";
  });
  id.addEventListener("click", function () {
    const img1 = document.createElement("img");
    img1.src = url;
    img1.classList.add("project-img");
    container.innerHTML = null;
    container.append(img1);
  });
}

changeProjectImg("Asset/project.png", dis1);
changeProjectImg("Asset/project1.jpg", dis2);
changeProjectImg("Asset/prroject2.jpg", dis3);
