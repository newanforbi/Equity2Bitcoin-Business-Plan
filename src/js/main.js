// CSS imports — Vite bundles all of these
import '../styles/main.css'
import '../styles/navbar.css'
import '../styles/hero.css'
import '../styles/halving.css'
import '../styles/market.css'
import '../styles/phases.css'
import '../styles/revenue.css'
import '../styles/treasury.css'
import '../styles/competitive.css'
import '../styles/roadmap.css'
import '../styles/compliance.css'
import '../styles/financials.css'
import '../styles/marketing.css'
import '../styles/exit.css'
import '../styles/cta.css'

// JS modules
import { initNav } from './nav.js'
import { initScrollReveal } from './scrollReveal.js'
import { initHeroCounters } from './heroCounters.js'
import { initChartObservers } from './charts/registry.js'
import { initMarketRings } from './marketRings.js'
import { initTimeline } from './timeline.js'
import { initFinancialBars } from './financialBars.js'
import { initPhaseArrows } from './phaseArrows.js'
import { initMarketingFunnel } from './marketingFunnel.js'

document.addEventListener('DOMContentLoaded', () => {
  initNav()
  initHeroCounters()
  initScrollReveal()
  initChartObservers()
  initMarketRings()
  initTimeline()
  initFinancialBars()
  initPhaseArrows()
  initMarketingFunnel()
})
