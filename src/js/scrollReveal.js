/**
 * IntersectionObserver-based scroll reveal
 * Watches [data-reveal] elements and adds .revealed class on entry
 */
export function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]')

  if (!elements.length) return

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
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  )

  elements.forEach(el => observer.observe(el))
}
