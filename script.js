// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  // degree range of frog slice
  const frogStart = 0;
  const frogEnd = 45;
  // const frogStart = 315;
  // const frogEnd = 360;
  let deg = 0;

  startButton.addEventListener('click', () => {
    // Disable button during spin
    startButton.style.pointerEvents = 'none';

    do {
      // Calculate a random rotation between 0 and 360
      deg = Math.floor(Math.random() * 360);
    } while (deg >= frogStart && deg <= frogEnd); 
    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
