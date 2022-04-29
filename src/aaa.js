const xhrButton = document.getElementById("xhr-button");
const fetchButton = document.getElementById("fetch-button");
const xhrP = document.getElementById("xhr-p");
const fetchP = document.getElementById("fetch-p");

//const url = "https://yayoflake.github.io/sandtest/aaa.html";
const url = "https://yayoflake.github.io/sandtest/result.html?id=ss&password=";

const data = "data";

const onClickFetch = () =>
  fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      fetchP.textContent = JSON.stringify(resJson);
    });

const onClickXhr = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    xhrP.textContent = xhr.responseText;
  };
  xhr.send();
};

xhrButton.addEventListener("click", onClickXhr);
fetchButton.addEventListener("click", onClickFetch);
