import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

export function createTreasuryDonut(canvasId) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return null

  return new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['2026 Origin ($106.25M)', '2027 Origin ($364.33M)', '2028 Origin ($929.65M)'],
      datasets: [{
        data: [106.25, 364.33, 929.65],
        backgroundColor: [
          'rgba(245,166,35,0.85)',
          'rgba(0,212,170,0.85)',
          'rgba(255,255,255,0.85)',
        ],
        borderColor: '#0a0a0a',
        borderWidth: 3,
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: false,
      cutout: '65%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: 'rgba(255,255,255,0.7)',
            font: { size: 11 },
            padding: 12,
            boxWidth: 12,
          }
        },
        tooltip: {
          backgroundColor: 'rgba(22,22,22,0.95)',
          borderColor: 'rgba(245,166,35,0.3)',
          borderWidth: 1,
          titleColor: '#f5a623',
          bodyColor: 'rgba(255,255,255,0.8)',
          callbacks: {
            label: ctx => ` $${ctx.raw.toFixed(2)}M`
          }
        }
      }
    }
  })
}
