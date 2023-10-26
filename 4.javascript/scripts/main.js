



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  if (!storedName)
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  else
    setUserName();
}


function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla 酷毙了，" + myName;
}

myButton.addEventListener("click", setUserName);

// 函数与事件

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png.png") {
    myImage.setAttribute("src", "images/scriptDataType.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png.png");
  }
};