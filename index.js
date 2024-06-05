function loadScreen()
{
  const btn = document.querySelector("button");
  btn.addEventListener("click", getCountFromUser);
  loadGrid(16);
}

function clearGrid() {
  console.log("Clearing Grid");
  const container = document.querySelector(".container");
  Array.from(container.childNodes).forEach(child => container.removeChild(child));
}

function loadGrid(number) {
  clearGrid();
  console.log(`number is ${number}`);
  const maxWidth = 960;
  const tileWidth = Math.floor(maxWidth / number);
  const whiteSpace = maxWidth - tileWidth * number;
  console.log(`tilewidth is ${tileWidth}`);
  console.log(`whiteSpace is ${whiteSpace}`);

  const container = document.querySelector(".container");
  for (let i = 0; i < number; i++) {
    const row = document.createElement("row");

    for (let j = 0; j < number; j++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.style.width = `${tileWidth}px`;
      tile.style.height = `${tileWidth}px`;
      tile.style.border = `1px solid grey`;
      tile.addEventListener("mouseover", () => {
        console.log("Mouse entered");
        tile.style.backgroundColor = getRandomRgb();
      });
      tile.addEventListener("mouseleave", () => {
        tile.style.backgroundColor = "white";
      })
      row.appendChild(tile);
    }
    container.appendChild(row);
  }
    

}

function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function getCountFromUser() {
  console.log("Enter getCountFromUser()");
  var count = prompt("How many squares?")
  const btn = document.querySelector("button");
  if (isNaN(count)) {
    alert("The entered value is invalid.");
  }
  else if (count > 100) {
    alert("Number is too high! Choose a smaller number (less than 101).");
  }
  else {
    loadGrid(count);  
  }

  btn.focus();
}

loadScreen();