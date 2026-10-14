let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const botoes = document.querySelectorAll(".btn-adicionar");

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const pizza = botao.closest(".pizza");

        const nome = pizza.querySelector("h3").textContent;
        const descricao = pizza.querySelector("p").textContent;
        const precoTexto = pizza.querySelector("span").textContent;
        const imagem = pizza.querySelector("img").getAttribute("src");

        const preco = parseFloat(
            precoTexto
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
                .trim()
        );

        const produto = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        };

        carrinho.push(produto);

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );

        atualizarContador();

        alert(nome + " foi adicionado ao carrinho!");

    });

});


function atualizarContador() {

    const contador = document.getElementById("contador-carrinho");

    if (!contador) {
        return;
    }

    const carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    contador.textContent = carrinho.length;

}


atualizarContador();