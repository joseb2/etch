
// create grid-containers document(element) reference

const cdiv = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  cdiv.appendChild(div);
}


let isMouseDown = false; 


cdiv.addEventListener('mousedown', () => {
  isMouseDown = true; 
}); 
cdiv.addEventListener('mouseover', (a) => {
    if (isMouseDown && a.target !== cdiv) { 
      a.target.style.backgroundColor = 'black';
    }

    if (a.target == cdiv || !cdiv.contains(a.relatedTarget)) { 
      console.log("outside") 
      isMouseDown = false; 
    }
}); 
