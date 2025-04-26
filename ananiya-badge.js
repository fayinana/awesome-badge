const badge = document.createElement("div");
badge.style.position = "fixed";
badge.style.bottom = "20px";
badge.style.right = "20px";
badge.style.zIndex = "10000";
badge.style.padding = "12px 20px";
badge.style.borderRadius = "12px";
badge.style.background = "rgba(255, 255, 255, 0.8)";
badge.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
badge.style.backdropFilter = "blur(10px)";
badge.style.color = "#111";
badge.style.fontFamily = "'Inter', sans-serif";
badge.style.fontSize = "14px";
badge.style.fontWeight = "500";
badge.style.display = "flex";
badge.style.alignItems = "center";
badge.style.gap = "10px";
badge.style.cursor = "pointer";
badge.style.transition = "all 0.3s ease";

// Dark mode support
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  badge.style.background = "rgba(24, 24, 24, 0.8)";
  badge.style.color = "#fff";
}

// Create logo image
const logo = document.createElement("img");
logo.src = "https://cdn.jsdelivr.net/gh/fayinana/awesome-badge/logo.svg";
logo.alt = "Ananiya Logo";
logo.style.width = "24px";
logo.style.height = "24px";
logo.style.borderRadius = "50%";
badge.appendChild(logo);

// Create link
const link = document.createElement("a");
link.href = "https://edekefayinana.vercel.app/";
link.target = "_blank";
link.rel = "noopener noreferrer";
link.style.color = "#18B5AB";
link.style.textDecoration = "none";
link.innerText = "Ananiya";

// Create text
const text = document.createElement("span");
text.innerHTML = `Developed by `;
text.appendChild(link);

// Append text to badge
badge.appendChild(text);

// Smooth fade in
badge.style.opacity = "0";
setTimeout(() => {
  badge.style.opacity = "1";
}, 500);

// Append badge to body
document.body.appendChild(badge);
