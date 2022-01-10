window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log('time', e.timeStamp);
  console.log(e);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');

  setTimeout(function () {
    key.classList.remove('playing');
  }, e.timeStamp / 100);
});
