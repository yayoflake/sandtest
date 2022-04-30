const xhrButton = document.getElementById("xhr-button");
const xhrP = document.getElementById("xhr-p");

//const url = "https://yayoflake.github.io/sandtest/aaa.html";
const url = "https://yayoflake.github.io/sandtest/result.html?id=ss&password=";

const data = "data";

const onClickXhr = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    xhrP.textContent = xhr.responseText;
  };
  xhr.send();
};

xhrButton.addEventListener("click", onClickXhr);
