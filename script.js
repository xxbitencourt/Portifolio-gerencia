const cardData = [
    {
      title: "Aurora",
      description: "Sneakers",
      image: "img/T1.jpg", // Use the actual image path
      creatorImage: "img/logo.png", // Image of the creator
      creatorName: "By Brenda Vieira & Vinicius Bitencourt",
      price: "$500"
    },
    {
      title: "Cyberpunk City",
      description: "Sneakers",
      image: "img/T2.jpg", // Use the actual image path
      creatorImage: "img/logo.png", // Image of the creator
      creatorName: "By Brenda Vieira & Vinicius Bitencourt",
      price: "$750"
    },
    {
      title: "Abstract Dream",
      description: "Sneakers",
      image: "img/T3.jpg", // Use the actual image path
      creatorImage: "img/logo.png", // Image of the creator
      creatorName: "By Brenda Vieira & Vinicius Bitencourt",
      price: "$400"
    },
    {
        title: "Abstract Dream",
        description: "Sneakers",
        image: "img/T4.jpg", // Use the actual image path
        creatorImage: "img/logo.png", // Image of the creator
        creatorName: "By Brenda Vieira & Vinicius Bitencourt",
        price: "$400"
      },
      {
        title: "Abstract Dream",
        description: "Sneakers",
        image: "img/T5.jpg", // Use the actual image path
        creatorImage: "img/logo.png", // Image of the creator
        creatorName: "By Brenda Vieira & Vinicius Bitencourt",
        price: "$400"
      },
      {
        title: "Abstract Dream",
        description: "Sneakers",
        image: "img/T6.jpg", // Use the actual image path
        creatorImage: "img/logo.png", // Image of the creator
        creatorName: "By Brenda Vieira & Vinicius Bitencourt",
        price: "$400"
      },
      {
        title: "Abstract Dream",
        description: "Sneakers",
        image: "img/T7.jpg", // Use the actual image path
        creatorImage: "img/logo.png", // Image of the creator
        creatorName: "By Brenda Vieira & Vinicius Bitencourt",
        price: "$400"
      },
      {
        title: "Abstract Dream",
        description: "Sneakers",
        image: "img/T8.jpg", // Use the actual image path
        creatorImage: "img/logo.png", // Image of the creator
        creatorName: "By Brenda Vieira & Vinicius Bitencourt",
        price: "$400"
      },
      {
        title: "Aurora",
        description: "Sneakers",
        image: "img/T1.jpg", // Use the actual image path
        creatorImage: "img/logo.png", // Image of the creator
        creatorName: "By Brenda Vieira & Vinicius Bitencourt",
        price: "$500"
      },
      {
        title: "Cyberpunk City",
        description: "Sneakers",
        image: "img/T2.jpg", // Use the actual image path
        creatorImage: "img/logo.png", // Image of the creator
        creatorName: "By Brenda Vieira & Vinicius Bitencourt",
        price: "$750"
      },
      {
        title: "Abstract Dream",
        description: "Sneakers",
        image: "img/T3.jpg", // Use the actual image path
        creatorImage: "img/logo.png", // Image of the creator
        creatorName: "By Brenda Vieira & Vinicius Bitencourt",
        price: "$400"
      },
      {
        title: "Abstract Dream",
        description: "Sneakers",
        image: "img/T8.jpg", // Use the actual image path
        creatorImage: "img/logo.png", // Image of the creator
        creatorName: "By Brenda Vieira & Vinicius Bitencourt",
        price: "$400"
      },
  ];
  
  function createHeader() {
    const header = document.createElement("header");
    header.className = "header";
  
    header.innerHTML = `
      <img src="img/logo.png" alt="Logo" class="header-logo">
      <h1>Sneakers Store</h1>
      <nav class="header-nav">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Contact</a>
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
        <p class="card-price">${card.price}</p>
        <div class="card-footer">
          <img src="${card.creatorImage}" alt="Creator Image" class="creator-img">
          <span class="creator-name">${card.creatorName}</span>
        </div>
      `;
  
      cardList.appendChild(cardElement);
    });
  
    document.body.appendChild(cardList);
  }
  
  function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
      <p> &copy; 2024 Sneakers Store | Created by <a
        href="https://github.com/xxbitencourt/Portifolio-gerencia.git"
        >Brenda Vieira & Vinicius Bitencourt </a></p>
      
    `;
    document.body.appendChild(footer);
  }
  
  function init() {
    createHeader();
    createCardList(cardData);
    createFooter();
  }
  
  document.addEventListener("DOMContentLoaded", init);
  