document.addEventListener("DOMContentLoaded", function () {
  const textArray = ["Front-end Developer.", "Web Designer."];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenWords = 800;

  const autoTypeText = document.getElementById("auto-type-text");

  function type() {
    if (charIndex < textArray[textIndex].length && !isDeleting) {
      autoTypeText.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (charIndex > 0 && isDeleting) {
      autoTypeText.textContent = textArray[textIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(type, erasingSpeed);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % textArray.length;
      }
      setTimeout(type, delayBetweenWords);
    }
  }

  type();
});
