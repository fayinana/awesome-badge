// ananiya-badge.js

const badge = document.createElement("div");
badge.innerHTML = `
  <div style="
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #000;
    color: #fff;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    z-index: 9999;
    font-family: Arial, sans-serif;
  ">
    <img src="https://yourcdn.com/your-logo.png" alt="Logo" style="width: 18px; height: 18px;">
    <span>Developed by Ananiya</span>
    <button onclick="this.parentElement.remove()" style="
      background: none;
      border: none;
      color: #888;
      font-size: 16px;
      margin-left: 8px;
      cursor: pointer;
    ">&times;</button>
  </div>
`;

document.body.appendChild(badge);
