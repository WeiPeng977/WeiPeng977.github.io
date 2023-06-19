let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/macintosh.webp") {
    console.log("1");
    myImage.setAttribute("src", "images/macbookair.webp");
  } else {
    console.log("2");
    myImage.setAttribute("src", "images/macintosh.webp");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello! " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Hello! " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
