'mode strict'

const links = {
    "nome": "Lucas Ferreira Lopes",
    "img": "avatar.jpg",
    "links": [
        {
            "titulo": "Facebook",
            "url": "https://www.facebook.com/lucasf.lopes22/"
        },
        {
            "titulo": "Instagram",
            "url": "https://www.instagram.com/_luc4ass/"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/lucas-ferreira-lopes"
        },
    ]
}

const avatar = document.getElementById('avatar');
avatar.src = links.img;

const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;

const endereco = document.getElementsByTagName('a')[0];
endereco.textContent = links.links[0].titulo;
endereco.href = links.links[0].url;
    
const endereco1 = document.getElementsByTagName('a')[1];
endereco1.textContent = links.links[1].titulo;
endereco1.href = links.links[1].url;

const endereco2 = document.getElementsByTagName('a')[2];
endereco2.textContent = links.links[2].titulo;
endereco2.href = links.links[2].url;