let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const listaCarrinho = document.getElementById("lista-carrinho");
const totalElemento = document.getElementById("total");


function mostrarCarrinho() {

    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {

        listaCarrinho.innerHTML = `
            <div class="carrinho-vazio">

                <h2>Seu carrinho está vazio 🍕</h2>

                <p>Adicione uma pizza pelo cardápio.</p>

            </div>
        `;

        totalElemento.textContent = "0,00";

        atualizarContador();

        return;
    }


    let total = 0;


    carrinho.forEach(function (produto, index) {

        total += produto.preco;


        const item = document.createElement("div");

        item.classList.add("item-carrinho");


        item.innerHTML = `

            <img 
                src="${produto.imagem}" 
                alt="${produto.nome}"
            >

            <div class="informacoes">

                <h3>${produto.nome}</h3>

                <p>${produto.descricao}</p>

                <strong>
                    R$ ${produto.preco
                        .toFixed(2)
                        .replace(".", ",")}
                </strong>

            </div>


            <button 
                class="btn-remover"
                onclick="removerProduto(${index})">

                🗑️ Remover

            </button>

        `;


        listaCarrinho.appendChild(item);

    });


    totalElemento.textContent =
        total.toFixed(2).replace(".", ",");


    atualizarContador();

}


function removerProduto(index) {

    carrinho.splice(index, 1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    mostrarCarrinho();

}


function atualizarContador() {

    const contador =
        document.getElementById("contador-carrinho");

    if (!contador) {
        return;
    }

    contador.textContent = carrinho.length;

}


mostrarCarrinho();