document.addEventListener("DOMContentLoaded", function() {
    var welcomeText = document.getElementById("welcome-text");
    var text = welcomeText.textContent;
    welcomeText.textContent = ""; // Kosongkan teks asli
  
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement("span");
      span.textContent = text[i];
      span.style.animationDelay = i * 0.5 + "s"; // Atur jeda animasi per huruf
      welcomeText.appendChild(span);
    }
  
    welcomeText.style.opacity = 1; // Aktifkan opasitas setelah span-span dibuat
  });
  