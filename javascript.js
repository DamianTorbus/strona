document.addEventListener("DOMContentLoaded", function () {
  const benefits = document.querySelectorAll("section ul li");
  benefits.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.color = "#84c482";
    });
    item.addEventListener("mouseout", () => {
      item.style.color = "#333";
    });
  });
});
function updateClock() {
  const clockElement = document.getElementById("clock");

  if (clockElement) {
    // Sprawdzamy, czy element został prawidłowo pobrany
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  } else {
    console.error("Element zegara nie został znaleziony.");
  }
}

// Wywołujemy funkcję po załadowaniu DOM, aby uniknąć problemów z dostępem do elementów
document.addEventListener("DOMContentLoaded", () => {
  updateClock(); // Pierwsze wywołanie, aby zegar był widoczny od razu
  setInterval(updateClock, 1000); // Aktualizuje zegar co sekundę
});
function toggleDetails(id) {
  const element = document.getElementById(id);
  if (
    element.style.display === "none" ||
    element.classList.contains("hidden")
  ) {
    element.style.display = "block";
    element.classList.remove("hidden");
  } else {
    element.style.display = "none";
    element.classList.add("hidden");
  }
}