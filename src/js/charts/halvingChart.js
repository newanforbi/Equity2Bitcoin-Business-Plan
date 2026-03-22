import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LogarithmicScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(
  LineController, LineElement, PointElement,
  LogarithmicScale, CategoryScale,
  Filler, Tooltip, Legend
)

const halvingPlugin = {
  id: 'halvingLines',
  afterDraw(chart) {
    const halvingIndices = [1, 5, 9, 13] // 2012, 2016, 2020, 2024
    const halvingYears = ['2012', '2016', '2020', '2024']
    const ctx = chart.ctx
    const { chartArea, scales } = chart

    if (!chartArea) return

    ctx.save()
    halvingIndices.forEach((idx, i) => {
      const x = scales.x.getPixelForTick(idx)

      // Dashed vertical line
      ctx.beginPath()
      ctx.setLineDash([6, 4])
      ctx.strokeStyle = 'rgba(245,166,35,0.6)'
      ctx.lineWidth = 1.5
      ctx.moveTo(x, chartArea.top)
      ctx.lineTo(x, chartArea.bottom)
      ctx.stroke()

      // Badge above chart
      const badgeText = `${halvingYears[i]} Halving`
      const badgePad = 6
      ctx.font = '600 10px Inter, sans-serif'
      ctx.setLineDash([])
      const textW = ctx.measureText(badgeText).width

      // Badge background
      const bx = x - textW / 2 - badgePad
      const by = chartArea.top - 28
      const bw = textW + badgePad * 2
      const bh = 20

      ctx.fillStyle = 'rgba(245,166,35,0.15)'
      ctx.beginPath()
      ctx.roundRect(bx, by, bw, bh, 4)
      ctx.fill()
      ctx.strokeStyle = 'rgba(245,166,35,0.5)'
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.fillStyle = '#f5a623'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(badgeText, x, by + bh / 2)
    })
    ctx.restore()
  }
}

export function createHalvingChart(canvasId) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return null

  const ctx = canvas.getContext('2d')

  // Gold gradient fill
  const gradient = ctx.createLinearGradient(0, 0, 0, 400)
  gradient.addColorStop(0, 'rgba(245,166,35,0.3)')
  gradient.addColorStop(1, 'rgba(245,166,35,0)')

  return new Chart(canvas, {
    type: 'line',
    plugins: [halvingPlugin],
    data: {
      labels: ['2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'],
      datasets: [{
        label: 'BTC Price (USD)',
        data: [5, 12, 1100, 800, 300, 650, 20000, 6000, 7000, 8500, 67000, 16000, 42000, 73000, 95000],
        borderColor: '#f5a623',
        backgroundColor: gradient,
        borderWidth: 2.5,
        pointRadius: 3,
        pointBackgroundColor: '#f5a623',
        tension: 0.3,
        fill: true,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      layout: { padding: { top: 36 } },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 } },
        },
        y: {
          type: 'logarithmic',
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: {
            color: 'rgba(255,255,255,0.6)',
            font: { size: 11 },
            callback(value) {
              const map = {1:'$1',10:'$10',100:'$100',1000:'$1K',10000:'$10K',100000:'$100K'}
              return map[value] || ''
            }
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(22,22,22,0.95)',
          borderColor: 'rgba(245,166,35,0.3)',
          borderWidth: 1,
          titleColor: '#f5a623',
          bodyColor: 'rgba(255,255,255,0.8)',
          callbacks: {
            label: ctx => ` $${ctx.raw.toLocaleString()}`
          }
        }
      }
    }
  })
}
