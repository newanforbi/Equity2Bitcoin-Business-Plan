/**
 * Alternating slide-in animation for roadmap timeline nodes
 */
export function initTimeline() {
  const nodes = Array.from(document.querySelectorAll('.timeline-node'))
  if (!nodes.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const i = nodes.indexOf(entry.target)
          const delay = Math.min(i * 120, 400)
          entry.target.style.setProperty('--node-delay', `${delay}ms`)
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -20px 0px',
    }
  )

  nodes.forEach(node => observer.observe(node))
}
