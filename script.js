// ===== WHATSAPP FORM FUNCTION =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whatsappForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    
    const phoneNumber = "918590458195"; // India number example (no + symbol)
    
    // Create message text
    const text = `Hello, I'm ${name} (${email}).\n${message}`;
    const encodedText = encodeURIComponent(text);

    // WhatsApp link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Open in new tab
    window.open(whatsappURL, "_blank");
  });
});
