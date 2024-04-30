export function increaseNumberAnimation(elementId, endNumber, speed = 0.5) {
  const element = document.getElementById(elementId);

  if (!element) return;

  /*  A dataset variable that is added to the animated element */
  const animationRunning = JSON.parse(
    element.dataset.animationRunning ?? false
  );

  if (animationRunning) return;

  element.dataset.animationRunning = true;

  incNbrRec(0, endNumber, element, speed);
}

/*A recursive function to increase the number.*/
function incNbrRec(currentNumber, endNumber, element, speed) {
  if (currentNumber <= endNumber) {
    element.innerHTML = currentNumber;
    setTimeout(function () {
      incNbrRec(currentNumber + 1, endNumber, element, speed);
    }, speed); //Delay a bit before calling the function again.
  } else {
    element.dataset.animationRunning = false;
  }
}
