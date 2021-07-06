const button = document.querySelector(".button");

let angka = "0";
button.addEventListener("click", function () {
  angka %= "2";
  angka++;
  if (angka == "1") {
    const ul = document.querySelector("#Dr-container ul");
    const newElemen = [
      document.createElement("li"),
      document.createElement("li"),
      document.createElement("li"),
    ];

    newElemen[0].innerHTML = "<a>> none1</a>";
    newElemen[1].innerHTML = "<a>> none2</a>";
    newElemen[2].innerHTML = "<a>> none3</a>";

    for (let dropDown of newElemen) {
      ul.appendChild(dropDown);
    }
  } else {
    const li = document.querySelectorAll("#Dr-container li");
    for (let elemen of li) {
      const ul = document.querySelector("#Dr-container ul");
      ul.removeChild(elemen);
    }
  }
});
