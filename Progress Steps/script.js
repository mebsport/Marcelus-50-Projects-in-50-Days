const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
update();

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(currentActive);

  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);

  update();
});

function update() {
  if (currentActive === 1) {
    prev.classList.add('disabeled');
  } else {
    prev.classList.remove('disabeled');
  }
  if (currentActive === 4) {
    next.classList.add('disabeled');
  } else {
    next.classList.remove('disabeled');
  }
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  console.log((actives.length / circles.length) * 100 + '%');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
}
