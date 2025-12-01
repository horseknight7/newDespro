import "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js";


// ========= Temperature chart =========

export function createTempChart(ctx) {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Temperature (°C)",
          data: [],
          borderColor: "#00d0a0",
          pointRadius: 3,
          pointHoverRadius: 6,
          tension: 0.25
        }
      ]
    },
    options: {
      // jangan resize-zoom lagi
      responsive: false,
      maintainAspectRatio: false,
      animation: false,
      scales: {
        x: {
          ticks: { color: "#ccc" },
          grid: { color: "rgba(255,255,255,0.05)" },
          title: {
            display: true,
            text: "Time",
            color: "#ccc"
          }
        },
        y: {
          // KUNCI RANGE DI SINI
          min: 50,    // bawah
          max: 80,    // atas (silakan ganti kalau mau)
          ticks: { color: "#ccc" },
          grid: { color: "rgba(255,255,255,0.05)" },
          title: {
            display: true,
            text: "°C",
            color: "#ccc"
          }
        }
      }
    }
  });
}

export function updateTempChart(chart, labels, temps) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = temps;
  chart.update();
}

// ========= Moisture chart =========

export function createMoistChart(ctx) {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Moisture (%)",
          data: [],
          borderColor: "#4dabf7",
          pointRadius: 3,
          pointHoverRadius: 6,
          tension: 0.25
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      animation: false,
      scales: {
        x: {
          ticks: { color: "#ccc" },
          grid: { color: "rgba(255,255,255,0.05)" },
          title: {
            display: true,
            text: "Time",
            color: "#ccc"
          }
        },
        y: {
          min: 30,   // range kelembapan, sesuaikan
          max: 80,
          ticks: { color: "#ccc" },
          grid: { color: "rgba(255,255,255,0.05)" },
          title: {
            display: true,
            text: "%",
            color: "#ccc"
          }
        }
      }
    }
  });
}

export function updateMoistChart(chart, labels, moistures) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = moistures;
  chart.update();
}