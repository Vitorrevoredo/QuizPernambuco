const CAT_NOMES = {
    regioes:   '🗺️ Regiões',
    cultura:   '🎭 Cultura',
    historia:  '⚔️ História',
    clima:     '🌤️ Clima & Natureza',
    culinaria: '🍽️ Culinária',
    todas:     '⭐ Desafio Total'
};

const NOMES_REGIOES = {
    'reg-sertao':        'Sertão',
    'reg-saofrancisco':  'São Francisco',
    'reg-agreste':       'Agreste',
    'reg-mata':          'Zona da Mata',
    'reg-metropolitana': 'Região Metropolitana'
};

let perguntas = [];
let indiceAtual = 0;
let pontos = 0;
let acertos = 0;
let categoriaAtual = '';

function embaralhar(arr) {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function iniciarJogo(categoria) {
    categoriaAtual = categoria;
    perguntas = embaralhar([...QUESTIONS[categoria]]);
    indiceAtual = 0;
    pontos = 0;
    acertos = 0;

    document.getElementById('tela-inicio').classList.add('d-none');
    document.getElementById('tela-resultado').classList.add('d-none');
    document.getElementById('tela-quiz').classList.remove('d-none');

    document.getElementById('badge-categoria').textContent = CAT_NOMES[categoria];
    carregarPergunta();
}

function carregarPergunta() {
    const q = perguntas[indiceAtual];
    const total = perguntas.length;

    document.getElementById('label-rodada').textContent = `${indiceAtual + 1} / ${total}`;
    document.getElementById('label-pontos').textContent = `⭐ ${pontos} pontos`;

    const progresso = (indiceAtual / total) * 100;
    document.getElementById('barra-progresso').style.width = progresso + '%';

    document.getElementById('texto-pergunta').textContent = q.pergunta;

    document.getElementById('area-feedback').classList.add('d-none');
    document.getElementById('btn-proxima').classList.add('d-none');
    document.getElementById('area-opcoes').innerHTML = '';

    if (q.tipo === 'mapa') {
        document.getElementById('area-opcoes').classList.add('d-none');
        mostrarMapa(q);
    } else {
        document.getElementById('area-mapa').classList.add('d-none');
        document.getElementById('area-opcoes').classList.remove('d-none');
        mostrarOpcoes(q);
    }
}

function mostrarOpcoes(q) {
    const area = document.getElementById('area-opcoes');

    q.opcoes.forEach((opcao, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-opcao';
        btn.textContent = opcao;
        btn.addEventListener('click', () => responderOpcao(i, q));
        area.appendChild(btn);
    });
}

function mostrarMapa(q) {
    const areaMapa = document.getElementById('area-mapa');
    areaMapa.classList.remove('d-none');

    resetarMapa();

    document.querySelectorAll('.regiao-pe').forEach(regiao => {
        regiao.style.cursor = 'pointer';
        regiao.onclick = () => responderMapa(regiao.id, q);
    });
}

function responderOpcao(escolhido, q) {
    const botoes = document.querySelectorAll('.btn-opcao');
    botoes.forEach(b => b.disabled = true);

    const acertou = escolhido === q.certa;
    botoes[escolhido].classList.add(acertou ? 'certa' : 'errada');

    if (!acertou) {
        botoes[q.certa].classList.add('certa');
    }

    registrarResultado(acertou, q.curiosidade, acertou ? null : `A resposta correta era: "${q.opcoes[q.certa]}"`);
}

function responderMapa(regiaoId, q) {
    document.querySelectorAll('.regiao-pe').forEach(r => {
        r.onclick = null;
        r.style.cursor = 'default';
    });

    const acertou = regiaoId === q.regiao;
    const regiaoClicada = document.getElementById(regiaoId);
    const regiaoCorreta = document.getElementById(q.regiao);

    if (acertou) {
        regiaoClicada.classList.add('acertou');
    } else {
        regiaoClicada.classList.add('errou');
        regiaoCorreta.classList.add('acertou');
    }

    const nomeClicado = NOMES_REGIOES[regiaoId];
    const nomeCorreto = NOMES_REGIOES[q.regiao];
    const msg = acertou ? null : `Você clicou em "${nomeClicado}". A resposta correta era "${nomeCorreto}"`;

    registrarResultado(acertou, q.curiosidade, msg);
}

function registrarResultado(acertou, curiosidade, mensagemErro) {
    if (acertou) {
        pontos += 10;
        acertos++;
    }

    document.getElementById('label-pontos').textContent = `⭐ ${pontos} pontos`;

    const feedback = document.getElementById('area-feedback');
    feedback.classList.remove('d-none', 'alert-success', 'alert-danger');
    feedback.classList.add(acertou ? 'alert-success' : 'alert-danger');

    document.getElementById('feedback-titulo').textContent = acertou ? '✅ Correto!' : '❌ Errado!';
    document.getElementById('feedback-texto').textContent = acertou
        ? 'Muito bem, você acertou!'
        : mensagemErro || 'Resposta incorreta.';
    document.getElementById('feedback-curiosidade').textContent = curiosidade ? '💡 ' + curiosidade : '';

    document.getElementById('btn-proxima').classList.remove('d-none');
}

function resetarMapa() {
    document.querySelectorAll('.regiao-pe').forEach(r => {
        r.classList.remove('acertou', 'errou');
        r.setAttribute('fill', 'transparent');
    });
}

function proximaPergunta() {
    indiceAtual++;

    if (indiceAtual >= perguntas.length) {
        mostrarResultado();
    } else {
        carregarPergunta();
    }
}

function mostrarResultado() {
    document.getElementById('tela-quiz').classList.add('d-none');
    document.getElementById('tela-resultado').classList.remove('d-none');

    const total = perguntas.length;
    const pct = Math.round((acertos / total) * 100);

    document.getElementById('acertos-finais').textContent = acertos;
    document.getElementById('total-finais').textContent = total;
    document.getElementById('pontos-finais').textContent = pontos;

    let emoji, mensagem;

    if (pct >= 80) {
        emoji = '🏆';
        mensagem = 'Excelente! Você conhece muito bem Pernambuco!';
    } else if (pct >= 60) {
        emoji = '😄';
        mensagem = 'Bom resultado! Mas ainda tem muito a aprender sobre PE.';
    } else if (pct >= 40) {
        emoji = '😅';
        mensagem = 'Razoável! Que tal tentar de novo para melhorar?';
    } else {
        emoji = '📚';
        mensagem = 'Hora de estudar mais sobre o nosso Pernambuco!';
    }

    document.getElementById('emoji-resultado').textContent = emoji;
    document.getElementById('mensagem-resultado').textContent = mensagem;
}

document.querySelectorAll('.btn-categoria').forEach(btn => {
    btn.addEventListener('click', () => iniciarJogo(btn.dataset.cat));
});

document.getElementById('btn-todas').addEventListener('click', () => iniciarJogo('todas'));

document.getElementById('btn-proxima').addEventListener('click', proximaPergunta);

document.getElementById('btn-jogar-novamente').addEventListener('click', () => iniciarJogo(categoriaAtual));

document.getElementById('btn-trocar-categoria').addEventListener('click', () => {
    document.getElementById('tela-resultado').classList.add('d-none');
    document.getElementById('tela-inicio').classList.remove('d-none');
});

document.getElementById('btn-voltar').addEventListener('click', () => {
    document.getElementById('tela-quiz').classList.add('d-none');
    document.getElementById('tela-inicio').classList.remove('d-none');
});