// Ativar o carrossel de promoções
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach(item => {
        item.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

// Iniciar o carrossel automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);


let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    if (carrinho.indexOf(nome) === -1) {
        carrinho.push(nome);
        total += preco;
        document.getElementById("itens-carrinho-nav").innerHTML += `<li>${nome} - R$${preco}</li>`;
        document.getElementById("total-nav").innerText = total;
        document.querySelector(".carrinho-contador").innerText = carrinho.length;
    } else {
        alert("Este item já está no carrinho!");
    }
}

function mostrarCarrinho() {
    const carrinhoLista = document.getElementById("carrinho-lista");
    const listaProdutos = document.getElementById("lista-produtos");
    
    if (carrinhoLista.style.display == "block") {
        carrinhoLista.style.display = "none";
        listaProdutos.style.display = "grid";
    } else {
        carrinhoLista.style.display = "block";
        listaProdutos.style.display = "none";
    }
}


