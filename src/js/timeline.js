/**
 * Alternating slide-in animation for roadmap timeline nodes
 */
export function initTimeline() {
  const nodes = document.querySelectorAll('.timeline-node')
  if (!nodes.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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

  nodes.forEach((node, i) => {
    // Stagger via CSS transition-delay set inline
    const content = node.querySelector('.timeline-content')
    if (content) {
      content.style.transitionDelay = `${i * 100}ms`
    }
    observer.observe(node)
  })
}
