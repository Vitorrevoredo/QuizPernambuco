const QUESTIONS = {

    regioes: [
        {
            tipo: 'mapa',
            pergunta: 'Recife fica em qual região de Pernambuco?',
            regiao: 'reg-metropolitana',
            curiosidade: 'A Região Metropolitana do Recife concentra cerca de 4 milhões de habitantes!'
        },
        {
            tipo: 'mapa',
            pergunta: 'Caruaru fica em qual região de Pernambuco?',
            regiao: 'reg-agreste',
            curiosidade: 'Caruaru é conhecida como a Capital do Agreste e abriga a maior feira livre do mundo!'
        },
        {
            tipo: 'mapa',
            pergunta: 'Petrolina fica em qual região de Pernambuco?',
            regiao: 'reg-saofrancisco',
            curiosidade: 'Petrolina é polo de fruticultura irrigada às margens do Rio São Francisco!'
        },
        {
            tipo: 'mapa',
            pergunta: 'Goiana fica em qual região de Pernambuco?',
            regiao: 'reg-mata',
            curiosidade: 'A Zona da Mata é a região mais úmida de Pernambuco e historicamente ligada ao cultivo de cana-de-açúcar!'
        },
        {
            tipo: 'mapa',
            pergunta: 'Araripina fica em qual região de Pernambuco?',
            regiao: 'reg-sertao',
            curiosidade: 'Araripina fica na Chapada do Araripe, região rica em fósseis pré-históricos!'
        },
        {
            tipo: 'mapa',
            pergunta: 'Garanhuns fica em qual região de Pernambuco?',
            regiao: 'reg-agreste',
            curiosidade: 'Garanhuns é chamada de "Suíça Pernambucana" por seu clima ameno de altitude!'
        }
    ],

    cultura: [
        {
            pergunta: 'Qual dança é considerada patrimônio cultural de Pernambuco e foi declarada Patrimônio Imaterial do Brasil?',
            opcoes: ['Forró', 'Frevo', 'Maracatu', 'Axé'],
            certa: 1,
            curiosidade: 'O Frevo surgiu no Recife no fim do século XIX e foi declarado Patrimônio Imaterial da Humanidade pela UNESCO em 2012!'
        },
        {
            pergunta: 'O Maracatu de Baque Virado é uma manifestação cultural de qual região?',
            opcoes: ['Sertão', 'Agreste', 'Zona da Mata', 'Região Metropolitana do Recife'],
            certa: 3,
            curiosidade: 'O Maracatu surgiu entre as comunidades afro-brasileiras do Recife e tem origens nas coroações de reis e rainhas africanas!'
        },
        {
            pergunta: 'As figurinhas de barro do Mestre Vitalino são originais de qual cidade?',
            opcoes: ['Recife', 'Caruaru', 'Olinda', 'Gravatá'],
            certa: 1,
            curiosidade: 'As figurinhas de barro de Mestre Vitalino estão expostas em museus de arte pelo mundo!'
        },
        {
            pergunta: 'Como se chama o duelo de improviso em versos entre dois poetas nordestinos?',
            opcoes: ['Embolada', 'Repente', 'Côco pisado', 'Aboio'],
            certa: 1,
            curiosidade: 'Os repentistas criam rimas em segundos usando métricas complexas como o "martelo" e o "galope"!'
        },
        {
            pergunta: 'A Literatura de Cordel, muito presente em Pernambuco, recebe esse nome por causa de quê?',
            opcoes: ['Da corda usada para encadernar', 'Do fio em que os folhetos eram pendurados para venda', 'Do cordeiro desenhado nas capas', 'Do autor chamado Cordel'],
            certa: 1,
            curiosidade: 'Os folhetos eram pendurados em cordas ou varal nas feiras para serem vendidos e expostos!'
        }
    ],

    historia: [
        {
            pergunta: 'A Revolução Pernambucana de 1817 tinha como principal objetivo:',
            opcoes: ['Expulsar os holandeses', 'Proclamar uma república independente', 'Abolir a escravidão', 'Instalar um império regional'],
            certa: 1,
            curiosidade: 'A Revolução de 1817 durou 75 dias e plantou a semente republicana que germinou em 1889!'
        },
        {
            pergunta: 'Frei Caneca foi um herói pernambucano fuzilado em 1825. Qual movimento ele liderou?',
            opcoes: ['Revolução Praieira', 'Confederação do Equador', 'A Cabanada', 'Revolta dos Alfaiates'],
            certa: 1,
            curiosidade: 'Frei Caneca disse antes de morrer: "Morrerei, mas meus escritos me sobreviverão." E sobreviveram!'
        },
        {
            pergunta: 'Em quais batalhas os pernambucanos expulsaram definitivamente os holandeses do Brasil?',
            opcoes: ['Batalhas do Tejipió', 'Batalhas dos Guararapes', 'Batalha de Tabocas', 'Batalha do Cabo'],
            certa: 1,
            curiosidade: 'As Batalhas dos Guararapes (1648-1649) são consideradas o berço do Exército Brasileiro!'
        },
        {
            pergunta: 'Maurício de Nassau governou Pernambuco entre 1637 e 1644 representando qual país europeu?',
            opcoes: ['Inglaterra', 'França', 'Holanda', 'Espanha'],
            certa: 2,
            curiosidade: 'Nassau transformou o Recife na cidade mais moderna das Américas de sua época!'
        },
        {
            pergunta: 'Qual cangaceiro pernambucano ficou famoso como o "Rei do Cangaço" no início do século XX?',
            opcoes: ['Antônio Silvino', 'Lampião', 'Corisco', 'Jesuíno Brilhante'],
            certa: 1,
            curiosidade: 'Lampião (Virgulino Ferreira da Silva) liderou seu bando por mais de 20 anos no semiárido!'
        },
        {
            pergunta: 'A Revolução Praieira de 1848 é considerada o último levante armado de qual período da história brasileira?',
            opcoes: ['Colonial', 'Imperial', 'Republicano', 'Das Regências'],
            certa: 1,
            curiosidade: 'A Praieira tinha um manifesto que pedia liberdade de imprensa e fim do monopólio comercial!'
        }
    ],

    clima: [
        {
            pergunta: 'Qual bioma predomina no Sertão pernambucano?',
            opcoes: ['Cerrado', 'Mata Atlântica', 'Caatinga', 'Amazônia'],
            certa: 2,
            curiosidade: 'A Caatinga é o único bioma exclusivamente brasileiro e cobre cerca de 50% do território de PE!'
        },
        {
            pergunta: 'Pernambuco possui apenas um tipo de clima em todo o seu território?',
            opcoes: ['Sim, tropical úmido em todo o estado', 'Não, existem pelo menos 3 tipos climáticos diferentes', 'Sim, semiárido em todo o estado', 'Não, mas só existem 2 tipos'],
            certa: 1,
            curiosidade: 'Há clima tropical úmido no litoral, semiárido no interior e de altitude no Agreste!'
        },
        {
            pergunta: 'O Recife recebe em média quantos mm de chuva por ano?',
            opcoes: ['Menos de 800 mm', 'Cerca de 1.200 mm', 'Mais de 2.000 mm', 'Cerca de 500 mm'],
            certa: 2,
            curiosidade: 'Com ~2.500 mm/ano, o Recife é uma das cidades mais chuvosas do Brasil!'
        },
        {
            pergunta: 'Onde nasce o Rio São Francisco, que atravessa Pernambuco?',
            opcoes: ['Na Serra da Borborema, em Pernambuco', 'Na Serra da Canastra, em Minas Gerais', 'Na Chapada Diamantina, na Bahia', 'Na Serra do Mar, em São Paulo'],
            certa: 1,
            curiosidade: 'O "Velho Chico" tem 2.863 km de extensão e é o maior rio totalmente brasileiro!'
        },
        {
            pergunta: 'A cidade de Petrolina tem um clima semelhante ao do litoral pernambucano?',
            opcoes: ['Sim, os dois são quentes e úmidos', 'Não, Petrolina tem clima semiárido com chuvas escassas', 'Sim, ambos têm mais de 2.000 mm de chuva por ano', 'Não, Petrolina tem clima frio por causa da altitude'],
            certa: 1,
            curiosidade: 'Mesmo com o clima seco, a irrigação do São Francisco faz Petrolina ser polo mundial de fruticultura!'
        },
        {
            pergunta: 'Fernando de Noronha é conhecida por qual característica ambiental?',
            opcoes: ['Maior floresta de Pernambuco', 'Recifes de coral ricos em biodiversidade marinha', 'Maior reserva de Caatinga preservada', 'Maior reservatório de água doce do estado'],
            certa: 1,
            curiosidade: 'Os recifes de Fernando de Noronha são considerados os mais ricos do Atlântico Sul!'
        }
    ],

    culinaria: [
        {
            pergunta: 'O bolo de rolo pernambucano tem influência de qual cultura em sua origem?',
            opcoes: ['Africana', 'Indígena', 'Portuguesa', 'Holandesa'],
            certa: 2,
            curiosidade: 'O bolo de rolo foi adaptado do "rocambole" português e hoje é símbolo da confeitaria pernambucana!'
        },
        {
            pergunta: 'O sarapatel, prato típico nordestino muito presente em Pernambuco, é feito principalmente com:',
            opcoes: ['Carne de bode assada', 'Miúdos de porco com sangue e vinagre', 'Peixe defumado do São Francisco', 'Carne seca com feijão'],
            certa: 1,
            curiosidade: 'O sarapatel tem origem africana e portuguesa e é uma das receitas mais antigas preservadas no Nordeste!'
        },
        {
            pergunta: 'A tapioca é feita a partir de qual ingrediente principal?',
            opcoes: ['Milho flocado', 'Batata-doce ralada', 'Mandioca (goma/polvilho)', 'Inhame amassado'],
            certa: 2,
            curiosidade: 'A tapioca tem origem tupi: "tipyóca" significa "coisa que coagula", referindo-se ao processo de preparo!'
        },
        {
            pergunta: 'Qual combinação de frutas é exportada em grande escala pelo Vale do São Francisco?',
            opcoes: ['Banana e caju', 'Cajá e umbu', 'Manga e uva', 'Caju e maracujá'],
            certa: 2,
            curiosidade: 'As uvas do Vale do São Francisco são colhidas em épocas em que a Europa está no inverno!'
        },
        {
            pergunta: 'A buchada de bode, prato típico sertanejo, é feita de qual forma?',
            opcoes: ['Bode inteiro assado na brasa', 'Vísceras de bode cozidas dentro do estômago do animal', 'Costela de bode com feijão verde', 'Pernil de bode na vinha-d\'alho'],
            certa: 1,
            curiosidade: 'A buchada representa o aproveitamento total do animal — tradição forte na culinária sertaneja!'
        },
        {
            pergunta: 'O sururu, petisco tradicional do Recife, é um tipo de:',
            opcoes: ['Peixe de água doce', 'Molusco bivalve', 'Crustáceo de mangue', 'Queijo artesanal'],
            certa: 1,
            curiosidade: 'O Sururu no Leite de Coco é vendido há séculos nas feiras populares do Recife!'
        }
    ]
};

QUESTIONS.todas = [
    ...QUESTIONS.regioes,
    ...QUESTIONS.cultura,
    ...QUESTIONS.historia,
    ...QUESTIONS.clima,
    ...QUESTIONS.culinaria
];