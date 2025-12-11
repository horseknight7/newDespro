import "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js";

// ========= TEMPERATURE CHART (dengan threshold atas dan bawah) =========
export function createTempChart(ctx) {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Temperature (°C)",
          data: [],
          borderColor: "#ff4d4f", // Merah untuk suhu
          backgroundColor: "rgba(255, 77, 79, 0.1)",
          pointBackgroundColor: "#ff4d4f",
          pointBorderColor: "#ffffff",
          pointRadius: 4,
          pointHoverRadius: 7,
          pointBorderWidth: 2,
          tension: 0.3,
          borderWidth: 3,
          borderWidth: 3,
          fill: false,
          spanGaps: true // FIX: Connect lines even if gaps exist
        },
        {
          label: "Max Threshold",
          data: [],
          borderColor: "#ffa940", // Orange untuk max threshold
          borderDash: [8, 6],
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0,
          tension: 0,
          fill: false
        },
        {
          label: "Min Threshold",
          data: [],
          borderColor: "#9254de", // Ungu untuk min threshold
          borderDash: [8, 6],
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0,
          tension: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      scales: {
        x: {
          ticks: {
            color: "#b0b0c0",
            font: {
              size: 12,
              weight: '500'
            }
          },
          grid: {
            color: "rgba(255,255,255,0.08)",
            drawBorder: false
          },
          title: {
            display: true,
            text: "Time",
            color: "#f8f8f8",
            font: {
              size: 14,
              weight: '600'
            },
            padding: { top: 10, bottom: 10 }
          }
        },
        y: {
          // min: 40,  <-- REMOVED to allow auto-scale
          // max: 80,  <-- REMOVED to allow auto-scale
          ticks: {
            color: "#b0b0c0",
            font: {
              size: 12,
              weight: '500'
            }
          },
          grid: {
            color: "rgba(255,255,255,0.08)",
            drawBorder: false
          },
          title: {
            display: true,
            text: "Temperature (°C)",
            color: "#f8f8f8",
            font: {
              size: 14,
              weight: '600'
            },
            padding: { top: 10, bottom: 10 }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "#f8f8f8",
            font: {
              size: 13,
              weight: '500'
            },
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          },
          position: 'top',
          align: 'start'
        },
        tooltip: {
          backgroundColor: 'rgba(17, 17, 25, 0.95)',
          titleColor: '#f8f8f8',
          bodyColor: '#f8f8f8',
          borderColor: 'rgba(0, 208, 160, 0.3)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8
        }
      }
    }
  });
}

// ========= MOISTURE CHART (dengan threshold atas dan bawah) =========
export function createMoistChart(ctx) {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Moisture (%)",
          data: [],
          borderColor: "#4dabf7", // Biru untuk moisture
          backgroundColor: "rgba(77, 171, 247, 0.1)",
          pointBackgroundColor: "#4dabf7",
          pointBorderColor: "#ffffff",
          pointRadius: 4,
          pointHoverRadius: 7,
          pointBorderWidth: 2,
          tension: 0.3,
          borderWidth: 3,
          borderWidth: 3,
          fill: false,
          spanGaps: true // FIX: Connect lines even if gaps exist
        },
        {
          label: "Max Threshold",
          data: [],
          borderColor: "#ffa940", // Orange untuk max threshold
          borderDash: [8, 6],
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0,
          tension: 0,
          fill: false
        },
        {
          label: "Min Threshold",
          data: [],
          borderColor: "#9254de", // Ungu untuk min threshold
          borderDash: [8, 6],
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0,
          tension: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      scales: {
        x: {
          ticks: {
            color: "#b0b0c0",
            font: {
              size: 12,
              weight: '500'
            }
          },
          grid: {
            color: "rgba(255,255,255,0.08)",
            drawBorder: false
          },
          title: {
            display: true,
            text: "Time",
            color: "#f8f8f8",
            font: {
              size: 14,
              weight: '600'
            },
            padding: { top: 10, bottom: 10 }
          }
        },
        y: {
          // min: 20, <-- REMOVED
          // max: 80, <-- REMOVED
          ticks: {
            color: "#b0b0c0",
            font: {
              size: 12,
              weight: '500'
            }
          },
          grid: {
            color: "rgba(255,255,255,0.08)",
            drawBorder: false
          },
          title: {
            display: true,
            text: "Moisture (%)",
            color: "#f8f8f8",
            font: {
              size: 14,
              weight: '600'
            },
            padding: { top: 10, bottom: 10 }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "#f8f8f8",
            font: {
              size: 13,
              weight: '500'
            },
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          },
          position: 'top',
          align: 'start'
        },
        tooltip: {
          backgroundColor: 'rgba(17, 17, 25, 0.95)',
          titleColor: '#f8f8f8',
          bodyColor: '#f8f8f8',
          borderColor: 'rgba(77, 171, 247, 0.3)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8
        }
      }
    }
  });
}

export function updateTempChart(chart, labels, temps, thresholdMin, thresholdMax) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = temps;

  if (thresholdMax != null && !Number.isNaN(thresholdMax)) {
    chart.data.datasets[1].data = labels.map(() => thresholdMax);
  } else {
    chart.data.datasets[1].data = [];
  }

  if (thresholdMin != null && !Number.isNaN(thresholdMin)) {
    chart.data.datasets[2].data = labels.map(() => thresholdMin);
  } else {
    chart.data.datasets[2].data = [];
  }

  chart.update();
}

export function updateMoistChart(chart, labels, moist, thresholdMin, thresholdMax) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = moist;

  if (thresholdMax != null && !Number.isNaN(thresholdMax)) {
    chart.data.datasets[1].data = labels.map(() => thresholdMax);
  } else {
    chart.data.datasets[1].data = [];
  }

  if (thresholdMin != null && !Number.isNaN(thresholdMin)) {
    chart.data.datasets[2].data = labels.map(() => thresholdMin);
  } else {
    chart.data.datasets[2].data = [];
  }

  chart.update();
}