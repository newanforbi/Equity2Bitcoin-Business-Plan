/**
 * Animate the financial margin progress bars when they enter viewport
 */
export function initFinancialBars() {
  const fills = document.querySelectorAll('.progress-fill[data-width]')
  if (!fills.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.progress-fill[data-width]')
          fills.forEach((fill, i) => {
            setTimeout(() => {
              fill.style.width = fill.dataset.width + '%'
            }, i * 200)
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )

  const container = document.querySelector('.fin-margins')
  if (container) {
    observer.observe(container)
  }
}
