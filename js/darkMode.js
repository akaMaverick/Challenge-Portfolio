let botao = document.getElementById('cor');
let corpo = document.querySelector('body');
let texto = document.querySelectorAll("p");
let tituloSecundario = document.querySelectorAll("h2");
let tituloTerciario = document.querySelectorAll("h3");
let skill = document.querySelectorAll('.skill__itens')
let links = document.querySelectorAll('.lista__links');
let linksBorda = document.querySelectorAll('.lista__itens');
let formacaoBorda = document.querySelectorAll('.formacao__itens')
let formacaoFundoTitulo = document.querySelectorAll('.formacao__itens__titulo')
let formacaoFundoParagrafo = document.querySelectorAll('.formacao__itens__paragrafo')
let tituloPrincipal = document.querySelector('h1');
let footer = document.querySelector('footer');
let contador = 0;

botao.addEventListener('click', ()=> {

    if(contador == 0) {
        botao.style.backgroundColor = "#1313cc7e";
        tituloPrincipal.style.color = "#ffffff";
        corpo.style.backgroundColor = "#000000";
        footer.style.color = "#ffffff";
        for(let i = 0; i < texto.length; i++) {
        texto[i].style.color = "#ffffff";
        }
        for(let i = 0; i < tituloSecundario.length; i++) {
            tituloSecundario[i].style.color = "#ffffff";
        }
        for(let i = 0; i < tituloTerciario.length; i++) {
            tituloTerciario[i].style.color = "#ffffff";
        }
        for(let i = 0; i < skill.length; i++) {
            skill[i].style.border = "1px solid #ffffff";
        }
        for(let i = 0; i < links.length; i++) {
            links[i].style.color = "#ffffff";
            linksBorda[i].style.border = "1px solid #ffffff"
        }

        for(let i = 0; i < formacaoBorda.length; i++) {
            formacaoFundoTitulo[i].style.color = "#000000";
            formacaoFundoParagrafo[i].style.color = "#000000";
            formacaoBorda[i].style.border = "1px solid #888888"
        }
        contador = 1;
    } else if(contador == 1) {
        botao.style.backgroundColor = "#f3f4e5";
        tituloPrincipal.style.color = "#000000";
        corpo.style.backgroundColor = "#ffffff";
        footer.style.color = "#000000";
        for(let i = 0; i < texto.length; i++) {
        texto[i].style.color = "#000000";
        }
        for(let i = 0; i < tituloSecundario.length; i++) {
            tituloSecundario[i].style.color = "#000000";
        }
        for(let i = 0; i < tituloTerciario.length; i++) {
            tituloTerciario[i].style.color = "#000000";
        }
        for(let i = 0; i < skill.length; i++) {
            skill[i].style.border = "1px solid #000000";
        }
        for(let i = 0; i < links.length; i++) {
            links[i].style.color = "#000000";
            linksBorda[i].style.border = "1px solid #000000"
        }

        for(let i = 0; i < formacaoBorda.length; i++) {
            formacaoFundoTitulo[i].style.color = "#000000";
            formacaoFundoParagrafo[i].style.color = "#000000";
            formacaoBorda[i].style.border = "1px solid #000000"
        }
        contador = 0;
    }
})




