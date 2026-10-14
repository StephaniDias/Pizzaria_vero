# 🍕 Vero Pizza — Sistema Web para Pizzaria

**Um projeto de desenvolvimento web front-end inspirado em uma pizzaria, criado para praticar HTML, CSS e JavaScript e simular a experiência de navegação e pedidos em um estabelecimento gastronômico.**

O Vero Pizza apresenta uma interface temática, identidade visual própria e páginas para navegação pelo cardápio, acesso de usuários e gerenciamento de itens no carrinho de compras.

🔗 **Repositório:** [StephaniDias/Pizzaria_vero](https://github.com/StephaniDias/Pizzaria_vero)

---

## 📌 Sobre o projeto

O Vero Pizza é um projeto desenvolvido com foco no aprendizado prático de desenvolvimento web. A proposta é criar um site para uma pizzaria fictícia, com uma interface intuitiva e funcionalidades que representam etapas comuns de uma experiência de compra on-line.

O projeto reúne páginas de apresentação, cardápio, cadastro, login, recuperação de senha e carrinho de compras, utilizando tecnologias fundamentais do desenvolvimento front-end.

## 🎯 Objetivos

- Aplicar os conhecimentos de HTML5, CSS3 e JavaScript.
- Desenvolver interfaces organizadas e visualmente atrativas.
- Praticar a navegação entre páginas de um site.
- Implementar interatividade com JavaScript.
- Trabalhar com manipulação do DOM e atualização dinâmica de elementos.
- Desenvolver funcionalidades de um carrinho de compras.
- Praticar a organização de arquivos e recursos de um projeto web.

## ✨ Funcionalidades

### 🏠 Página inicial
- Apresentação visual da pizzaria.
- Identidade visual personalizada.
- Navegação para as demais áreas do site.

### 🍕 Cardápio
- Exibição de pizzas com imagens ilustrativas.
- Apresentação dos nomes, descrições e preços dos produtos.
- Botões para adicionar produtos ao carrinho.
- Interface organizada para facilitar a visualização das opções.

### 👤 Cadastro de usuários
- Página dedicada ao cadastro de novos usuários.
- Campos para preenchimento das informações solicitadas.
- Interface integrada à proposta visual do projeto.

### 🔐 Login
- Tela de acesso com campos de e-mail e senha.
- Botão para entrar.
- Navegação para a página de cadastro.
- Opção para recuperação de senha.

### 🔑 Recuperação de senha
- Página destinada ao fluxo de recuperação de acesso.
- Interface para orientar o usuário durante esse processo.

### 🛒 Carrinho de compras
- Adição de produtos selecionados no cardápio.
- Visualização dos itens adicionados.
- Remoção de produtos do carrinho.
- Contador dinâmico da quantidade de itens.
- Atualização da quantidade exibida conforme as alterações realizadas.

> **Observação:** as telas de login, cadastro e recuperação de senha fazem parte da interface do projeto. A autenticação segura e a recuperação real de credenciais dependem de uma implementação de back-end ou serviço de autenticação.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação no projeto |
|---|---|
| HTML5 | Estruturação das páginas e dos formulários. |
| CSS3 | Estilização, cores, layouts, componentes e identidade visual. |
| JavaScript | Interatividade, manipulação do DOM e funcionalidades do carrinho. |

### 🎨 Identidade visual

A interface utiliza elementos visuais inspirados no universo das pizzarias, com predominância de tons de vermelho, vinho, preto e branco, imagens de alimentos e componentes que reforçam a identidade da marca fictícia Vero Pizza.

O objetivo é proporcionar uma experiência visual consistente entre as diferentes páginas.

## 📂 Estrutura do projeto

```text
Pizzaria_vero/
│
├── imagens/
│   └── Imagens utilizadas no projeto
│
├── index.html
├── cardapio.html
├── cadastro.html
├── login.html
├── login.css
├── resetsenha.html
├── carrinho.html
├── carrinho.js
├── promocoes.html
├── sobrenos.html
├── style.css
├── responsivo.css
├── script.js
│
└── README.md
```

### 📄 Principais arquivos

- **`index.html`** — página inicial do site.
- **`cardapio.html`** — página de apresentação dos produtos e opções para adicionar itens ao carrinho.
- **`cadastro.html`** — interface de cadastro de usuários.
- **`login.html`** — tela de acesso ao sistema.
- **`login.css`** — estilos específicos relacionados à interface de login.
- **`resetsenha.html`** — página de recuperação de senha.
- **`carrinho.html`** — interface para visualizar e gerenciar os produtos selecionados.
- **`carrinho.js`** — lógica JavaScript relacionada ao carrinho de compras.
- **`script.js`** — scripts utilizados nas interações do site.
- **`style.css`** — estilos principais da aplicação.
- **`responsivo.css`** — estilos voltados à adaptação da interface a diferentes tamanhos de tela.
- **`promocoes.html`** — página destinada à apresentação de promoções.
- **`sobrenos.html`** — página institucional sobre a pizzaria.
- **`imagens/`** — diretório com recursos visuais utilizados nas páginas.

## 🚀 Como executar o projeto

Você pode executar o projeto localmente sem instalar frameworks ou ferramentas de compilação.

### Pré-requisitos

- Um navegador atualizado, como Google Chrome, Microsoft Edge ou Firefox.
- Git, caso queira clonar o repositório.
- Um editor de código, como o Visual Studio Code, para explorar ou modificar os arquivos.

### 1. Clone o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/StephaniDias/Pizzaria_vero.git
```

### 2. Acesse a pasta

```bash
cd Pizzaria_vero
```

### 3. Abra o projeto

Abra a pasta no Visual Studio Code e execute o arquivo `index.html` no navegador.

Outra opção é utilizar a extensão **Live Server** do Visual Studio Code para executar o site em um servidor de desenvolvimento local.

### 4. Explore as funcionalidades

Navegue pelo site e teste as páginas disponíveis, incluindo o cardápio, as telas de acesso e o carrinho de compras.

## 🧠 Conhecimentos praticados

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes para a construção de aplicações web:

- Estruturação semântica com HTML.
- Estilização de componentes com CSS.
- Organização de folhas de estilo.
- Utilização de JavaScript para interatividade.
- Manipulação de elementos do DOM.
- Eventos e ações do usuário.
- Atualização dinâmica do contador do carrinho.
- Adição e remoção de itens.
- Construção e navegação entre múltiplas páginas.
- Organização de arquivos e recursos de um projeto.
- Desenvolvimento de interfaces voltadas à experiência do usuário.

## 🔮 Possíveis melhorias futuras

O projeto pode evoluir com a implementação de novas funcionalidades, como:

- Integração com banco de dados.
- Cadastro e autenticação de usuários com validação segura.
- Recuperação de senha por e-mail.
- Persistência dos itens do carrinho entre páginas e sessões.
- Cálculo automático do valor total do pedido.
- Seleção de tamanhos e adicionais das pizzas.
- Finalização de pedidos e acompanhamento de status.
- Integração com uma API para gerenciamento de produtos.
- Painel administrativo para cadastro e atualização do cardápio.
- Melhorias de acessibilidade e responsividade.
- Testes automatizados das principais funcionalidades.

## 👩‍💻 Desenvolvedora

**Stephani Dias**

Estudante de Análise e Desenvolvimento de Sistemas, desenvolvendo projetos práticos para aprimorar conhecimentos em programação e desenvolvimento de software.

🔗 **GitHub:** [StephaniDias](https://github.com/StephaniDias)

💼 **LinkedIn:** [Acesse meu perfil](https://linkedin.com/in/stephani-dias)

---

⭐ Se você gostou do projeto, deixe uma estrela no repositório!

**Projeto desenvolvido para fins de estudo e portfólio.**
