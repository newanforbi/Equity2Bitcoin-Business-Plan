/**
 * Animate a counter element from 0 to target value
 * @param {HTMLElement} el - Element to animate
 * @param {number} target - Target value
 * @param {string} prefix - Prefix string (e.g. "$")
 * @param {string} suffix - Suffix string (e.g. "T")
 * @param {number} decimals - Number of decimal places
 * @param {number} duration - Animation duration in ms
 */
export function animateCounter(el, target, prefix = '', suffix = '', decimals = 0, duration = 2000) {
  const startTime = performance.now()
  const startValue = 0

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4)
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutQuart(progress)
    const current = startValue + (target - startValue) * eased
    el.textContent = prefix + current.toFixed(decimals) + suffix
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      el.textContent = prefix + target.toFixed(decimals) + suffix
    }
  }

  requestAnimationFrame(update)
}

/**
 * Format a number as currency string
 */
export function formatCurrency(n) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)
}

/**
 * Format large numbers as millions/billions
 */
export function formatMillions(n) {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}B`
  if (n >= 1) return `$${n.toFixed(1)}M`
  return `$${(n * 1000).toFixed(0)}K`
}
