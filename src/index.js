const xhrButton = document.getElementById("xhr-button");
const xhrP = document.getElementById("xhr-p");

const url = "https://learnwebcode.github.io/json-example/animals-1.json";

const onClickXhr = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    xhrP.textContent = xhr.responseText;
  };
  xhr.send();
};

xhrButton.addEventListener("click", onClickXhr);
