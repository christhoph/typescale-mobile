const $currYear = document.getElementById("currYear");
const $currentYear = document.getElementById("currentYear");

const fullYearValue = new Date().getFullYear();

$currYear.textContent = fullYearValue;
$currentYear.textContent = fullYearValue;

const $root = document.documentElement;
const $fontPicker = document.getElementById("font-picker");

$fontPicker.addEventListener("change", (e) => {
  const selectedFont = e.target.value;
  loadFont(selectedFont);

  // Actualizar variable CSS
  $root.style.setProperty("--current-font", `'${selectedFont}', sans-serif`);
});

function loadFont(fontName) {
  const fontId = fontName.replace(/\s+/g, "+");

  if (!document.getElementById(`font-${fontId}`)) {
    const link = document.createElement("link");
    link.id = `font-${fontId}`;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${fontId}:wght@400;500;600;700;800&display=swap`;

    document.head.appendChild(link);
    console.log(`Fuente cargada: ${fontName}`);
  } else {
    console.log(`Fuente ya en caché: ${fontName}`);
  }
}
