Atue como um Desenvolvedor Front-end Sênior especialista em React, SVG Animation e GSAP (GreenSock).

Estou refatorando meu portfólio atual para criar uma experiência imersiva de "Creative Development", baseada em storytelling visual e rolagem interativa. Preciso que você crie a estrutura base dos componentes React e a lógica do GSAP (usando @gsap/react e ScrollTrigger).

Aqui estão as especificações do meu perfil e das seções que vamos construir:

### Perfil Profissional
* Cargo: Junior Fullstack Developer (Java/Spring Boot, React, Python).
* Ferramentas diárias: Neovim para codificação, Obsidian para gestão de conhecimento.

### Arquitetura Desejada
1. Componentização: Cada "Cena" deve ser um componente isolado (ex: `<AboutScene />`, `<ProjectsScene />`).
2. Animação: O foco é manipular SVGs inline usando refs do React e GSAP ScrollTrigger.
3. Rolagem: Implementar o conceito de "Pinning" (congelar a tela) para transformar o scroll vertical em progressão de linha do tempo.

### Cena 1: About Me (A Bateria e o Reset Mental)
* Conceito: Mostrar o contraste entre o foco no terminal e o meu método de descompressão.
* Narrativa Visual: Um personagem SVG em um set de bateria acústica. A ideia é mostrar que toco o instrumento para gerenciar o estresse e resetar a mente após longas sessões escrevendo código e configurando o Neovim.
* Ação do GSAP: Quando o usuário rolar por essa seção, quero uma animação ativada pelo ScrollTrigger onde os braços do personagem (agrupados em tags <g> separadas no SVG) se movem batendo nos pratos e na caixa.

### Cena 2: Projetos (Varal de Revelação e Engrenagens)
* Conceito: Uma "sala de revelação" misturada com uma "linha de montagem" de código.
* Projetos a destacar nos cards:
  1. Mainframe Logistics Automation (ferramenta RPA em Python usando o algoritmo First Fit Decreasing).
  2. Plataforma @rrafesp (Trabalho voluntário em Web Development usando WordPress/Elementor).
* Narrativa Visual: Engrenagens mecânicas no fundo (representando a lógica de backend em Java/Python) e um varal (linha SVG) em primeiro plano.
* Ação do GSAP: Conforme o scroll avança (usando scrub: true), as engrenagens de fundo devem girar rotacionando no eixo Z. Ao mesmo tempo, "cards" HTML (que representam as fotos dos projetos) devem entrar na tela deslizando e rotacionando sutilmente, como se estivessem sendo pendurados na linha animada do SVG.

### O que eu preciso como output de código inicial:
1. O setup do componente principal `Portfolio.jsx` registrando o GSAP ScrollTrigger.
2. O código do componente `<ProjectsScene />` com a estrutura exata de como configurar a div "pinada" (pinned) para criar a rolagem horizontal que revela os projetos um por um enquanto as engrenagens giram no fundo.
3. Um exemplo de como estruturar os componentes e importar os SVGs corretamente para que as refs do GSAP consigam manipulá-los.

Não utilize CSS complexo para o layout inicial, foque puramente na estrutura JSX e na mecânica matemática do GSAP ScrollTrigger.
