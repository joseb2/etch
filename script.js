
// create grid-containers document(element) reference

document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector(".grid-container");
  
    function createGrid(rows, cols) {
      gridContainer.style.setProperty("--grid-rows", rows);
      gridContainer.style.setProperty("--grid-cols", cols);
  
      for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "blue";
        });


        gridContainer.appendChild(cell).className = "grid-item"; 

      }
    }
  
    createGrid(16, 16); 
  });

