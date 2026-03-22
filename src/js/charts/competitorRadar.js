import {
  Chart,
  RadarController,
  RadialLinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(
  RadarController, RadialLinearScale,
  LineElement, PointElement,
  Filler, Tooltip, Legend
)

export function createCompetitorRadar(canvasId) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return null

  return new Chart(canvas, {
    type: 'radar',
    data: {
      labels: [
        'Regulatory Safety',
        'Bitcoin Expertise',
        'Home Equity Focus',
        'Education Model',
        'Milestone Clarity',
        'Scalability',
      ],
      datasets: [
        {
          label: 'Equity2Bitcoin',
          data: [95, 90, 100, 95, 100, 90],
          borderColor: '#f5a623',
          backgroundColor: 'rgba(245,166,35,0.2)',
          borderWidth: 2,
          pointBackgroundColor: '#f5a623',
          pointRadius: 4,
        },
        {
          label: 'RIA Advisers',
          data: [60, 70, 30, 50, 40, 60],
          borderColor: 'rgba(255,255,255,0.5)',
          backgroundColor: 'rgba(255,255,255,0.07)',
          borderWidth: 1.5,
          pointBackgroundColor: 'rgba(255,255,255,0.5)',
          pointRadius: 3,
        },
        {
          label: 'Mortgage Brokers',
          data: [70, 20, 80, 30, 20, 50],
          borderColor: 'rgba(0,212,170,0.5)',
          backgroundColor: 'rgba(0,212,170,0.07)',
          borderWidth: 1.5,
          pointBackgroundColor: 'rgba(0,212,170,0.5)',
          pointRadius: 3,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          min: 0,
          max: 100,
          grid: { color: 'rgba(255,255,255,0.08)' },
          angleLines: { color: 'rgba(255,255,255,0.08)' },
          pointLabels: {
            color: 'rgba(255,255,255,0.7)',
            font: { size: 11 },
          },
          ticks: {
            display: true,
            stepSize: 25,
            color: 'rgba(255,255,255,0.2)',
            font: { size: 9 },
            backdropColor: 'transparent',
            callback: (v) => v === 0 ? '' : v
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'rgba(255,255,255,0.7)',
            font: { size: 11 },
            boxWidth: 12,
            padding: 12,
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
