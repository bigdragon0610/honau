const usamaru = document.getElementById('usamaru_img');
const honau = document.getElementById('honau_title');
const heart_wrapper = document.getElementById('heart_wrapper');
const heart = "<p class='heart'>♡</p>";
usamaru.addEventListener('click', () => {
  honau.classList.toggle('color_red');
  heart_wrapper.insertAdjacentHTML('beforeend', heart);
});

document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });