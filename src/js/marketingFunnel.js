/**
 * marketingFunnel.js
 * Adds staggered reveal delays to funnel cards so they cascade
 * left-to-right when they enter the viewport.
 * The heavy lifting (IntersectionObserver + .revealed class) is
 * already handled by scrollReveal.js; this module only adds the
 * per-card delay so the reveal feels animated rather than instant.
 */

export function initMarketingFunnel() {
  const cards = document.querySelectorAll('.funnel-card')
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`
  })

  const channelCards = document.querySelectorAll('.channel-card')
  channelCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`
  })

  const kpiChips = document.querySelectorAll('.kpi-chip')
  kpiChips.forEach((chip, i) => {
    chip.style.transitionDelay = `${i * 0.08}s`
  })

  const vpNodes = document.querySelectorAll('.vp-node')
  vpNodes.forEach((node, i) => {
    node.style.transitionDelay = `${i * 0.12}s`
  })
}
