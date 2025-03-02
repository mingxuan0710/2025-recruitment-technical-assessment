document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const imageGrid = document.getElementById("imageGrid");

      data.forEach(building => {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const img = document.createElement("img");
        img.src = "assets/" + (building.building_picture || building.building_file);
        img.alt = building.name;

        const label = document.createElement("div");
        label.classList.add("image-label");
        const greenCircle = document.createElement("span");
        greenCircle.classList.add("green-circle")
        const textSpan = document.createElement("span");
        textSpan.textContent = `${building.rooms_available} rooms available`;

        label.appendChild(greenCircle);
        label.appendChild(textSpan);

        const nameBox = document.createElement("div");
        nameBox.classList.add("name-box");
        nameBox.textContent = building.name;

        container.appendChild(img);
        container.appendChild(label);
        container.appendChild(nameBox);
        imageGrid.appendChild(container);

      });
    })
    .catch(error => console.error("Error loading JSON data:", error));
});

document.addEventListener("DOMContentLoaded", () => {

  const logoImage = document.getElementById("logo-image");

  logoImage.addEventListener("click", () => {

    if (logoImage.src.includes("freeroomsDoorClosed.png")) {
      logoImage.src = "assets/freeRoomsLogo.png";
    } else {
      logoImage.src = "assets/freeroomsDoorClosed.png";
    }
  });
});