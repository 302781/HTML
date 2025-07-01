# Desafio Modo Caverna: Um Guia para o Desafio de 30 Dias

Este é um projeto de site estático desenvolvido para o "Desafio Modo Caverna", uma jornada de 30 dias focada em desconexão digital, autoconhecimento e desenvolvimento pessoal. O site serve como um guia interativo, oferecendo regras, benefícios e um diário pessoal para acompanhar o progresso dos participantes.

## 🚀 Visão Geral

O "Desafio Modo Caverna" é um experimento digital minimalista que visa ajudar os usuários a se desconectarem das distrações digitais e se reconectarem consigo mesmos. O site atua como um companheiro virtual, fornecendo informações essenciais e ferramentas para essa jornada.

## ✨ Funcionalidades Principais

* **Página Inicial (index.html):** Introdução ao desafio, seus princípios e o que esperar.
* **Regras (regras.html):** Detalhamento das diretrizes e compromissos do desafio.
* **Benefícios (beneficios.html):** Exploração dos ganhos e transformações esperados ao completar o desafio.
* **Diário (diario.html):** Uma ferramenta interativa para os participantes registrarem seu progresso diário, reflexões e sentimentos.
* **Fim do Desafio (fim.html):** Uma página conclusiva, planejada para o final dos 30 dias.
* **Junte-se (login.html):** Uma página de login/cadastro placeholder (funcionalidade não implementada no projeto estático atual).
* **NPC Interativo:** Personagens NPC (Non-Player Characters) que evoluem e interagem com o usuário em diferentes páginas, adicionando um toque lúdico e motivacional.

### 📝 Detalhes do Diário Interativo

A página `diario.html` é o coração da interação do usuário. Ela permite que o usuário:

* **Selecione um Dia:** Clique em qualquer um dos 30 dias para acessar suas anotações.
* **Visualizar Anotações:** Veja as respostas salvas para um dia específico em um formato de "caderno".
* **Adicionar/Editar Anotações:** Se o dia não tiver anotações ou se o usuário quiser modificar as existentes, um formulário detalhado com perguntas guiadas é exibido:
    * `⏳ Tempo sem redes sociais:`
    * `🌿 Como estou me sentindo hoje?`
    * `🎯 O que fiz hoje que me orgulha?`
    * `📚 O que estudei ou aprendi?`
    * `🌙 O que meu “eu do futuro” precisa saber sobre hoje?`
    * `🧠 Gatilhos ou desafios do dia:`
    * `💡 Uma coisa que quero tentar amanhã:`
* **Salvar Anotações:** As anotações são salvas localmente no navegador do usuário (utilizando `localStorage`), garantindo que o progresso seja mantido mesmo após fechar a página.
* **Excluir Anotações:** Opção para remover completamente as anotações de um dia específico.
* **Experiência de Scroll Suave:** Ao selecionar um dia, a página rola suavemente para a seção do diário, proporcionando uma transição agradável.

## 💻 Tecnologias Utilizadas

Este projeto é construído com tecnologias front-end padrão:

* **HTML5:** Estrutura e conteúdo das páginas.
* **CSS3:** Estilização, layout responsivo e design visual.
* **JavaScript (ES6+):** Para a interatividade da página do diário (armazenamento local, manipulação do DOM e eventos).
* **Font Awesome:** Para ícones (se aplicável, verifique o `link rel="stylesheet"`).
* **Google Fonts:** Para fontes personalizadas (`Cousine`, `Inter`).

## ⚙️ Como Rodar o Projeto Localmente

Para visualizar e interagir com o site em seu computador, siga os passos abaixo:

1.  **Clone ou Baixe o Repositório:**
    Se você estiver usando Git:
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd desafio-modo-caverna
    ```
    Caso contrário, baixe o arquivo ZIP do projeto e descompacte-o em uma pasta.

2.  **Abra os Arquivos no Navegador:**
    Navegue até a pasta onde você salvou o projeto. Simplesmente clique duas vezes nos arquivos `.html` (por exemplo, `index.html`, `diario.html`) para abri-los em seu navegador padrão.

    **Nota:** Como este é um site estático e usa `localStorage` (que é uma API do navegador), não é necessário um servidor web local para as funcionalidades principais. Basta abrir os arquivos HTML diretamente.

## 📂 Estrutura do Projeto
/
├── index.html
├── regras.html
├── beneficios.html
├── diario.html
├── fim.html
├── login.html
├── style.css
├── script.js
└── img/
├── Logo.jpeg
├── npc-index.png  (Exemplo: Imagens de NPC)
├── npc-regras.png
├── npc-beneficios.png
├── npc-diario.png
└── npc-fim.png
└── (outras imagens)
* `index.html`: Página inicial do site.
* `regras.html`, `beneficios.html`, `diario.html`, `fim.html`, `login.html`: Outras páginas do site.
* `style.css`: Folha de estilos global para o site.
* `script.js`: Lógica JavaScript para o diário interativo e outras interatividades.
* `img/`: Pasta contendo todas as imagens utilizadas no projeto, incluindo os NPCs.

## 🤝 Contribuições

Este projeto foi desenvolvido como parte de um desafio pessoal e é uma demonstração de habilidades em desenvolvimento web front-end. Contribuições, sugestões e melhorias são sempre bem-vindas!

## 📄 Licença

[Seu projeto pode ter uma licença, como MIT. Se sim, adicione aqui. Caso contrário, você pode remover esta seção ou adicionar um aviso de "Todos os direitos reservados".]

## 📞 Contato

[Seu nome/nickname] - [Seu email ou link para seu perfil no LinkedIn/GitHub]

---
