/**
 * Trigger the concentric rings animation when market section enters viewport
 */
export function initMarketRings() {
  const ringsWrap = document.querySelector('.market-rings-wrap')
  if (!ringsWrap) return

  const rings = ringsWrap.querySelectorAll('.ring')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          rings.forEach((ring, i) => {
            setTimeout(() => {
              ring.classList.add('visible')
            }, i * 300)
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(ringsWrap)
}
