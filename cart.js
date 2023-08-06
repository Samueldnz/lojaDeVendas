 // Seletor do botão "Adicionar ao Carrinho"
 const addToCartButtons = document.querySelectorAll(".add-to-cart");
        
 // Seletor do contador do carrinho
 const cartCount = document.querySelector(".cart-count");

 // Contador inicial do carrinho
 let itemCount = 0;

 // Adicionar evento de clique a todos os botões "Adicionar ao Carrinho"
 addToCartButtons.forEach(button => {
     button.addEventListener("click", () => {
         itemCount++;
         cartCount.textContent = itemCount;
     });
 });

 