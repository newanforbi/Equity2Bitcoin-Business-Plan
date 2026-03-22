import { createHalvingChart } from './halvingChart.js'
import { createRevenueChart } from './revenueChart.js'
import { createTreasuryDonut } from './treasuryDonut.js'
import { createCompetitorRadar } from './competitorRadar.js'
import { createCostDonut } from './costDonut.js'

const chartMap = {
  'halving-chart': createHalvingChart,
  'revenue-chart': createRevenueChart,
  'treasury-donut': createTreasuryDonut,
  'competitor-radar': createCompetitorRadar,
  'cost-donut': createCostDonut,
}

const rendered = new Map()

/**
 * Sets up IntersectionObserver for all registered canvas elements.
 * Charts are only created when they scroll into view.
 */
export function initChartObservers() {
  const canvases = document.querySelectorAll('canvas[id]')
  if (!canvases.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const id = entry.target.id
        if (entry.isIntersecting && chartMap[id] && !rendered.get(id)) {
          rendered.set(id, true)
          chartMap[id](id)
        }
      })
    },
    { threshold: 0.1 }
  )

  canvases.forEach(canvas => {
    if (chartMap[canvas.id]) {
      observer.observe(canvas)
    }
  })
}
