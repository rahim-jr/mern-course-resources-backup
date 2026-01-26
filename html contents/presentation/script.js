// Simple slide controller
(() => {
  const slides = Array.from(document.querySelectorAll('.slide'))
  const prevBtn = document.getElementById('prev')
  const nextBtn = document.getElementById('next')
  const progress = document.getElementById('progress')
  let idx = 0

  function show(i){
    if(i < 0) i = 0
    if(i >= slides.length) i = slides.length - 1
    slides.forEach(s => s.classList.remove('active'))
    slides[i].classList.add('active')
    idx = i
    progress.textContent = `${i+1} / ${slides.length}`
    document.title = slides[i].dataset.title + ' — CSS Basics'
  }

  prevBtn.addEventListener('click', () => show(idx - 1))
  nextBtn.addEventListener('click', () => show(idx + 1))

  document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight' || e.key === 'PageDown') show(idx + 1)
    if(e.key === 'ArrowLeft' || e.key === 'PageUp') show(idx - 1)
    if(e.key === 'Home') show(0)
    if(e.key === 'End') show(slides.length - 1)
  })

  // initialize
  if(slides.length) show(0)
})()
