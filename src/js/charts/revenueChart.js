import {
  Chart,
  BarController,
  LineController,
  BarElement,
  LineElement,
  PointElement,
  LogarithmicScale,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(
  BarController, LineController,
  BarElement, LineElement, PointElement,
  LogarithmicScale, LinearScale, CategoryScale,
  Tooltip, Legend
)

export function createRevenueChart(canvasId) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return null

  return new Chart(canvas, {
    data: {
      labels: ['2026', '2027', '2028', '2030', '2031', '2032'],
      datasets: [
        {
          type: 'bar',
          label: 'Consulting Revenue ($M)',
          data: [2.25, 9, 26.25, 90, 180, 360],
          backgroundColor: 'rgba(245,166,35,0.75)',
          borderColor: '#f5a623',
          borderWidth: 1,
          yAxisID: 'y',
          borderRadius: 4,
        },
        {
          type: 'bar',
          label: 'BTC Profit Potential ($M)',
          data: [18.75, 64.29, 164.06, 600, 900, 1440],
          backgroundColor: 'rgba(0,212,170,0.5)',
          borderColor: '#00d4aa',
          borderWidth: 1,
          yAxisID: 'y',
          borderRadius: 4,
        },
        {
          type: 'line',
          label: 'Client Count',
          data: [25, 100, 250, 1000, 2000, 4000],
          borderColor: 'rgba(255,255,255,0.8)',
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#ffffff',
          yAxisID: 'y2',
          tension: 0.3,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 } },
        },
        y: {
          type: 'logarithmic',
          position: 'left',
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: {
            color: 'rgba(255,255,255,0.6)',
            font: { size: 11 },
            callback(value) {
              const map = {1:'$1M',10:'$10M',100:'$100M',1000:'$1B'}
              return map[value] || ''
            }
          }
        },
        y2: {
          type: 'linear',
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: {
            color: 'rgba(255,255,255,0.4)',
            font: { size: 11 },
            callback(v) { return v >= 1000 ? `${v/1000}K` : v }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'rgba(255,255,255,0.7)',
            font: { size: 11 },
            boxWidth: 12,
            padding: 16,
          }
        },
        tooltip: {
          backgroundColor: 'rgba(22,22,22,0.95)',
          borderColor: 'rgba(245,166,35,0.3)',
          borderWidth: 1,
          titleColor: '#f5a623',
          bodyColor: 'rgba(255,255,255,0.8)',
        }
      }
    }
  })
}
