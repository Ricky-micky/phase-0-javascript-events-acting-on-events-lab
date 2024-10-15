const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 5}px`; // Move left by 5 pixels
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
    
    if (left < 360) { // Assuming the container is 400px wide
        dodger.style.left = `${left + 5}px`; // Move right by 5 pixels
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});

// Your code here
