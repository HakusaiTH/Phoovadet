// URLs corresponding to each card
const cardLinks = {
    g_1: "https://github.com/HakusaiTH/CiraCore-VanguardField",
    g_2: "https://github.com/HakusaiTH/Blynk-car-control-form-xbox-joy",
    g_3: "https://github.com/HakusaiTH/GTA-San-Weight-body-tracking",
    g_4: "https://github.com/HakusaiTH/joshu",
    g_5: "https://github.com/HakusaiTH/waifu-linechatbot",
  };
  
  // Function to handle card clicks and redirect to the corresponding URL
  function get_ele(ele) {
    if (cardLinks[ele]) {
      window.open(cardLinks[ele], "_blank"); // Open the link in a new tab
    } else {
      alert("No link associated with this card.");
    }
  }
  
  // Function to add click event listeners dynamically
  function setupCardListeners() {
    const cards = document.querySelectorAll('.card'); // Get all cards
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const cardId = card.id; // Get the ID of the clicked card
        get_ele(cardId);       // Handle the click
      });
    });
  }
  
  // Initialize event listeners
  setupCardListeners();
  