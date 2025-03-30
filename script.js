document.addEventListener('DOMContentLoaded', () => {
  const animals = document.querySelectorAll('.animal');

  animals.forEach(animal => {
    animal.addEventListener('click', () => {
      const soundName = animal.getAttribute('data-sound');
      const audio = new Audio(`sounds/${soundName}.mp3`);
      audio.play().catch(error => {
        console.error('Sound playback failed:', error);
      });
    });
  });
});
