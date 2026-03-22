import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

export function createCostDonut(canvasId) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return null

  return new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Gross Profit', 'Personnel', 'Marketing', 'Tech', 'Legal', 'Misc'],
      datasets: [{
        data: [97, 1.5, 0.6, 0.2, 0.2, 0.2],
        backgroundColor: [
          'rgba(245,166,35,0.85)',
          'rgba(0,212,170,0.8)',
          'rgba(255,255,255,0.6)',
          'rgba(100,180,255,0.7)',
          'rgba(200,100,255,0.7)',
          'rgba(255,150,100,0.7)',
        ],
        borderColor: '#0a0a0a',
        borderWidth: 2,
        hoverOffset: 6,
      }]
    },
    options: {
      responsive: false,
      cutout: '60%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: 'rgba(255,255,255,0.7)',
            font: { size: 10 },
            padding: 8,
            boxWidth: 10,
          }
        },
        tooltip: {
          backgroundColor: 'rgba(22,22,22,0.95)',
          borderColor: 'rgba(245,166,35,0.3)',
          borderWidth: 1,
          titleColor: '#f5a623',
          bodyColor: 'rgba(255,255,255,0.8)',
          callbacks: {
            label: ctx => ` ${ctx.raw}%`
          }
        }
      }
    }
  })
}
