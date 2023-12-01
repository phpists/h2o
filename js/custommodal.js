var modal = document.getElementById('customModal');
var icon = document.getElementById('customBurgerIcon');

var closeBtn = document.querySelector('.custom-close');

icon.addEventListener('click', function() {
  modal.style.display = 'block';
  console.log(4);
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  console.log(4);
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});