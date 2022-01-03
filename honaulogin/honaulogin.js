let honau_name = [
  'ほなう',
  'ほなみ',
  'ほなほな',
  'ほなほなほなう',
  'かわいいほなう',
  'うちだほなみ',
  '帆南',
  '内田',
  '内田帆南',
  'hona',
  'honau',
  'honami',
  'honahonau',
]
const login_button = document.getElementById('login_button');
login_button.addEventListener('click', () => {
  let login_name = document.getElementById('login_form').value;
  if (honau_name.includes(login_name)) {
    document.location.href = '../honahonau/honahonau.html';
  }
});