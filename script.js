const changeTextButton = document.getElementById('changeTextButton');
const sampleText = document.getElementById('sampleText');

changeTextButton.addEventListener('click', () => {
  sampleText.textContent = "你点击按钮后文字改变啦！";
});