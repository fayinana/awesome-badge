// Create badge container
const badge = document.createElement("div");
badge.style.position = "fixed";
badge.style.bottom = "20px";
badge.style.right = "20px";
badge.style.zIndex = "10000";
badge.style.padding = "12px 20px";
badge.style.borderRadius = "16px";
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
badge.style.transition = "all 0.3s ease, border 1s ease";
badge.style.border = "2px solid transparent";
badge.style.backgroundClip = "padding-box";
badge.style.animation = "pulse 2s infinite";
badge.classList.add("awesome-badge");

// Dark mode support
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  badge.style.background = "rgba(24, 24, 24, 0.8)";
  badge.style.color = "#fff";
}

// Create logo
const logo = document.createElement("img");
logo.src = "https://cdn.jsdelivr.net/gh/fayinana/awesome-badge/logo.svg";
logo.alt = "Ananiya Logo";
logo.style.width = "24px";
logo.style.height = "24px";
logo.style.borderRadius = "50%";
badge.appendChild(logo);

// Create text with link
const text = document.createElement("span");
text.innerHTML = `Developed by <a href="https://edekefayinana.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #18B5AB; text-decoration: none;">Ananiya</a>`;
badge.appendChild(text);

// Create close ("×") button
const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;";
closeBtn.style.marginLeft = "10px";
closeBtn.style.cursor = "pointer";
closeBtn.style.fontSize = "18px";
closeBtn.style.fontWeight = "bold";
closeBtn.style.transition = "color 0.3s";
closeBtn.addEventListener("mouseenter", () => {
  closeBtn.style.color = "red";
});
closeBtn.addEventListener("mouseleave", () => {
  closeBtn.style.color = "";
});
closeBtn.addEventListener("click", () => {
  badge.remove();
});
badge.appendChild(closeBtn);

// Smooth fade in + slight move up
badge.style.opacity = "0";
badge.style.transform = "translateY(20px)";
setTimeout(() => {
  badge.style.opacity = "1";
  badge.style.transform = "translateY(0)";
}, 100);

// Auto-hide logic
let hideTimeout;
const startHideTimer = () => {
  hideTimeout = setTimeout(() => {
    badge.style.opacity = "0";
    setTimeout(() => badge.remove(), 500);
  }, 10000); // 10 seconds
};

const stopHideTimer = () => {
  clearTimeout(hideTimeout);
};

badge.addEventListener("mouseenter", stopHideTimer);
badge.addEventListener("mouseleave", startHideTimer);

// Start hide timer initially
startHideTimer();

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

.awesome-badge {
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
}

.awesome-badge::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  z-index: -1;
  background: linear-gradient(270deg, #18B5AB, #6C5CE7, #A29BFE, #18B5AB);
  background-size: 600% 600%;
  border-radius: 20px;
  animation: borderMove 8s ease infinite;
}

@keyframes borderMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
document.head.appendChild(styleSheet);

// Append badge to body
document.body.appendChild(badge);
