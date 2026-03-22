/**
 * Animate phase connector arrows when phases section enters viewport
 */
export function initPhaseArrows() {
  const phasesFlow = document.querySelector('.phases-flow')
  if (!phasesFlow) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const paths = entry.target.querySelectorAll('.arrow-path')
          paths.forEach((path, i) => {
            setTimeout(() => {
              path.classList.add('drawn')
            }, i * 200 + 400)
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(phasesFlow)
}
