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
            if (carrinho.some(item => item.nome === nome)) {
                alert("Este item já está no carrinho!");
                return;
            }

            carrinho.push({ nome: nome, preco: preco, quantidade: 1 });
            total += preco;

            const itensCarrinhoNav = document.getElementById("itens-carrinho-nav");
            const listItem = document.createElement("li");
            listItem.innerHTML = `${nome} - R$${preco} - Quantidade: ${carrinho[carrinho.length - 1].quantidade} <button class="botao-incrementar" onclick="incrementarQuantidade(${carrinho.length - 1}, ${preco})">+</button> <button class="botao-decrementar" onclick="decrementarQuantidade(${carrinho.length - 1}, ${preco})">-</button> <button class="botao-remover" onclick="removerDoCarrinho(${carrinho.length - 1}, ${preco})"><i class="fas fa-trash"></i></button>`;
            itensCarrinhoNav.appendChild(listItem);

            document.getElementById("total-nav").innerText = total;
            atualizarContadorCarrinho();
            // document.querySelector(".carrinho-contador").innerText = carrinho.length;
        }

        function incrementarQuantidade(index, preco) {
            carrinho[index].quantidade++;
            total += preco;
            atualizarListaCarrinho();
        }

        function decrementarQuantidade(index, preco) {
            if (carrinho[index].quantidade > 1) {
                carrinho[index].quantidade--;
                total -= preco;
                atualizarListaCarrinho();
            }
        }

        function removerDoCarrinho(index, preco) {
            total -= carrinho[index].quantidade * preco;
            carrinho.splice(index, 1);
            atualizarListaCarrinho();
            atualizarContadorCarrinho();
        }

        function atualizarListaCarrinho() {
            const itensCarrinhoNav = document.getElementById("itens-carrinho-nav");
            itensCarrinhoNav.innerHTML = "";
        
            carrinho.forEach((item, index) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `${item.nome} - R$${item.preco} - Quantidade: ${item.quantidade} <button class="botao-incrementar" onclick="incrementarQuantidade(${index}, ${item.preco})">+</button> <button class="botao-decrementar" onclick="decrementarQuantidade(${index}, ${item.preco})">-</button> <button class="botao-remover" onclick="removerDoCarrinho(${index}, ${item.preco})"><i class="fas fa-trash"></i></button>`;
                itensCarrinhoNav.appendChild(listItem);
            });
        
            document.getElementById("total-nav").innerText = total;
        }

        function atualizarContadorCarrinho() {
            document.querySelector(".carrinho-contador").innerText = carrinho.length;
        }

        function mostrarCarrinho() {
            const carrinhoLista = document.getElementById("carrinho-lista");
            const listaProdutos = document.getElementById("lista-produtos");
            
            if (carrinhoLista.style.display === "block") {
                carrinhoLista.style.display = "none";
                listaProdutos.style.display = "grid";
            } else {
                carrinhoLista.style.display = "block";
                listaProdutos.style.display = "none";
            }
        }


