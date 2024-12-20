const cardData = [
    {
      title: "NFT Aurora",
      description: "A mesmerizing aurora borealis in NFT art.",
      image: "https://via.placeholder.com/300x200", // Use the actual image path
      creatorImage: "https://via.placeholder.com/30", // Image of the creator
      creatorName: "Jane Doe",
    },
    {
      title: "Cyberpunk City",
      description: "Futuristic cityscape with neon vibes.",
      image: "https://via.placeholder.com/300x200", // Use the actual image path
      creatorImage: "https://via.placeholder.com/30", // Image of the creator
      creatorName: "John Smith",
    },
    {
      title: "Abstract Dream",
      description: "An artistic blend of shapes and colors.",
      image: "https://via.placeholder.com/300x200", // Use the actual image path
      creatorImage: "https://via.placeholder.com/30", // Image of the creator
      creatorName: "Alice Johnson",
    },
  ];
  
  function createHeader() {
    const header = document.createElement("header");
    header.className = "header";
  
    header.innerHTML = `
      <img src="assets/logo.png" alt="Logo" class="header-logo">
      <nav class="header-nav">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
    `;
  
    document.body.prepend(header);
  }
  
  function createCardList(cards) {
    const cardList = document.createElement("div");
    cardList.className = "card-list";
  
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card animate__animated animate__fadeInUp";
  
      cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}" class="card-img">
        <h2 class="card-title">${card.title}</h2>
        <p class="card-description">${card.description}</p>
        <div class="card-footer">
          <img src="${card.creatorImage}" alt="Creator Image" class="creator-img">
          <span class="creator-name">${card.creatorName}</span>
        </div>
      `;
  
      cardList.appendChild(cardElement);
    });
  
    document.body.appendChild(cardList);
  }
  
  function init() {
    createHeader();
    createCardList(cardData);
  }
  
  document.addEventListener("DOMContentLoaded", init);
  