
let amigos = [];

function adicionarAmigo() {
    
    const nomeAmigo = document.getElementById('amigo').value.trim();
    
  
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

   
    amigos.push(nomeAmigo);


    atualizarLista();

    
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
}