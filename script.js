// ** Select Elements **
const leftEye = document.querySelector("#lefteye");
const rightEye = document.querySelector("#righteye");
const userInput = document.querySelector("#userInput");
const passInput = document.querySelector("#passInput");

// ** Focus Events **
userInput.addEventListener('focus', () => {
    leftEye.style.left = "99px";
    leftEye.style.paddingTop = "10px";
    rightEye.style.left = "163px";
    rightEye.style.paddingTop = "10px";
    const padding = Math.min(userInput.value.length, 20); // Limit padding to a maximum of 20
    leftEye.style.paddingLeft = `${padding}px`;
    rightEye.style.paddingLeft = `${padding}px`;
});

passInput.addEventListener('focus', () => {
    rightEye.style.top = "60px";
    leftEye.style.top = "60px";
    rightEye.style.left = "163px";
    leftEye.style.left = "121px";
});

// ** Blur Events **
userInput.addEventListener("blur", () => {
    rightEye.style.left = "174px";
    leftEye.style.left = "110px";
    leftEye.style.paddingTop = "0px";
    rightEye.style.paddingTop = "0px";
    leftEye.style.paddingLeft = "0px";
    rightEye.style.paddingLeft = "0px";
});

passInput.addEventListener('blur', () => {
    rightEye.style.top = "75px";
    leftEye.style.top = "75px";
    rightEye.style.left = "174px";
    leftEye.style.left = "110px";
    leftEye.style.paddingTop = "0px";
    rightEye.style.paddingTop = "0px";
    leftEye.style.paddingLeft = "0px";
    rightEye.style.paddingLeft = "0px";
});

// ** Eye Tracking **
userInput.addEventListener("keyup", () => {
    const padding = Math.min(userInput.value.length, 20); // Limit padding to a maximum of 20
    leftEye.style.paddingLeft = `${padding}px`;
    rightEye.style.paddingLeft = `${padding}px`;
});
