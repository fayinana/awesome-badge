const badge = document.createElement("div");
badge.style.position = "fixed";
badge.style.bottom = "30px";
badge.style.right = "30px";
badge.style.zIndex = "10000";
badge.style.padding = "10px 16px";
badge.style.borderRadius = "8px";
badge.style.background =
  "linear-gradient(270deg, #344242, #2d2a47, #5f5a92, #2c5a57)";
badge.style.backgroundSize = "400% 400%";
badge.style.backdropFilter = "blur(10px)";
badge.style.color = "#fff";
badge.style.fontFamily = "'Inter', sans-serif";
badge.style.fontSize = "12px";
badge.style.fontWeight = "500";
badge.style.display = "flex";
badge.style.alignItems = "center";
badge.style.gap = "8px";
badge.style.cursor = "pointer";
badge.style.transition = "all 0.3s ease";
badge.style.overflow = "visible"; // Important: allow close button to overflow
badge.classList.add("awesome-badge");

// --- Close button ---
const closeButton = document.createElement("span");
closeButton.innerHTML = "&times;";
closeButton.style.position = "absolute";
closeButton.style.top = "-6px";
closeButton.style.right = "-6px";
closeButton.style.width = "18px";
closeButton.style.height = "18px";
closeButton.style.display = "flex";
closeButton.style.alignItems = "center";
closeButton.style.justifyContent = "center";
closeButton.style.background = "#000";
closeButton.style.borderRadius = "50%";
closeButton.style.fontSize = "14px";
closeButton.style.cursor = "pointer";
closeButton.style.color = "#fff";
closeButton.style.boxShadow = "0 0 6px rgba(0,0,0,0.5)";
closeButton.style.transition = "all 0.3s ease";
closeButton.style.userSelect = "none";
closeButton.style.zIndex = "10000000";

// Hover effect
closeButton.onmouseenter = () => {
  closeButton.style.background = "#ff4d4f"; // red hover
};
closeButton.onmouseleave = () => {
  closeButton.style.background = "#000"; // back to black
};

// Fade-out before removing
closeButton.onclick = () => {
  badge.style.opacity = "0";
  setTimeout(() => badge.remove(), 300);
};

badge.appendChild(closeButton);

// --- Logo ---
const logo = document.createElement("img");
logo.src = "https://cdn.jsdelivr.net/gh/fayinana/awesome-badge/logo.svg"; // Your logo URL
logo.alt = "Ananiya Logo";
logo.style.width = "22px";
logo.style.height = "22px";
logo.style.borderRadius = "50%";
badge.appendChild(logo);

// --- Text ---
const text = document.createElement("span");
text.style.display = "flex";
text.style.alignItems = "center";
text.style.gap = "4px";
text.innerHTML = `Developed by <a href="https://ananiyafekede.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #18B5AB; text-decoration: none;">Ananiya</a>`;
badge.appendChild(text);

// --- Fade-in animation ---
badge.style.opacity = "0";
setTimeout(() => {
  badge.style.opacity = "1";
}, 300);

// --- Append badge to body ---
document.body.appendChild(badge);

// --- Style for animated border + background ---
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
.awesome-badge {
  position: relative;
  overflow: visible;
  animation: backgroundMove 8s ease infinite; /* Animate background */
}

.awesome-badge::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(270deg, #18B5AB, #6C5CE7, #A29BFE, #18B5AB);
  background-size: 400% 400%;
  animation: borderMove 6s ease infinite;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  mask:
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: -1;
}

@keyframes borderMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes backgroundMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
document.head.appendChild(styleSheet);
