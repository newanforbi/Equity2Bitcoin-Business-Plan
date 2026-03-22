import { animateCounter } from './utils.js'

/**
 * Animate the three hero stat counters on page load
 */
export function initHeroCounters() {
  const statEls = document.querySelectorAll('.stat-value[data-target]')

  statEls.forEach((el, i) => {
    const target = parseFloat(el.dataset.target)
    const prefix = el.dataset.prefix || ''
    const suffix = el.dataset.suffix || ''
    const decimals = parseInt(el.dataset.decimals || '0', 10)

    // Stagger each counter slightly
    setTimeout(() => {
      animateCounter(el, target, prefix, suffix, decimals, 2000)
    }, i * 200)
  })
}
