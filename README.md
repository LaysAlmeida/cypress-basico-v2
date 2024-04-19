# Testes automatizados com Cypress (básico)
Aqui será postado todo aprendizado referente ao Curso básico de Cypress do professor Walmyr Filho.

## Pré-requisitos
<ul> 
    <li>Node.js (v18.18.0)</li>
    <li>Git (v2.4.2)</li>
    <li>Npm(v10.1.0`)</li>
    <li>Visual Studio Code</li>
    <li>Google Chrome</li>
</ul>

## Instalação
 Para instalar o Npm, execute npm install `(ou npm i para versão curta)` para instalar as dependências

 Para instalar o Cypress, execute `npm install cypress@9.5.1 --save-dev`(ou `npm i cypress@9.5.1 -D` para a versão curta).

 Depois, executar `npx open cypress` para abrir o Cypress pela primeira vez.

## Tests
É possível executar os testes em dimensões de dispositivos Desktop e Mobile.

### Desktop
Execute `npm test` (ou `npm t` para versão curta) para executar o teste no modo headless.

Ou, execute `npm run cy:open` para abrir o Cypress no modo interativo.

### Mobile
Execute `npm run test:mobile` para executar o teste no modo headless.

Ou, execute `npm run cy:open:mobile` para abrir o Cypress no modo interativo.

Esse projeto foi criado com 💚 por [Lays Almeida](https://github.com/LaysAlmeida).