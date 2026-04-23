const QUESTIONS = {

    regioes: [
        {
            tipo: 'mapa',
            pergunta: 'Onde fica a cidade que sedia o maior São João do Brasil?',
            regiao: 'reg-agreste',
            curiosidade: 'Caruaru, no Agreste, disputa com Campina Grande (PB) o título de maior festa junina do planeta!'
        },
        {
            tipo: 'mapa',
            pergunta: 'A Fiat/Jeep construiu sua maior fábrica do Nordeste em qual região de Pernambuco?',
            regiao: 'reg-mata',
            curiosidade: 'A fábrica da Jeep em Goiana, na Zona da Mata, gera mais de 9 mil empregos diretos!'
        },
        {
            tipo: 'mapa',
            pergunta: 'Onde nasceu Virgulino Ferreira da Silva, mais conhecido como Lampião?',
            regiao: 'reg-sertao',
            curiosidade: 'Lampião nasceu em Serra Talhada em 1898 e liderou o cangaço por mais de 20 anos!'
        },
        {
            tipo: 'mapa',
            pergunta: 'Onde fica o Porto de Suape, um dos maiores complexos industriais portuários do Brasil?',
            regiao: 'reg-metropolitana',
            curiosidade: 'O Porto de Suape fica em Ipojuca e movimenta mais de 20 milhões de toneladas de carga por ano!'
        },
        {
            tipo: 'mapa',
            pergunta: 'Qual região de Pernambuco é a maior produtora de uva e manga para exportação?',
            regiao: 'reg-saofrancisco',
            curiosidade: 'O Vale do São Francisco permite até 3 safras de uva por ano — algo único no mundo!'
        },
        {
            tipo: 'mapa',
            pergunta: 'A cidade que abriga o primeiro geoparque das Américas (Chapada do Araripe) fica em qual região?',
            regiao: 'reg-sertao',
            curiosidade: 'O Geopark Araripe tem fósseis de mais de 100 milhões de anos, incluindo pterossauros!'
        },
        {
            tipo: 'mapa',
            pergunta: 'A cidade conhecida como "Suíça Pernambucana", com temperaturas de até 12°C, está em qual região?',
            regiao: 'reg-agreste',
            curiosidade: 'Garanhuns fica a quase 900 metros de altitude e atrai turistas no inverno pelo seu Festival de Inverno!'
        },
        {
            tipo: 'mapa',
            pergunta: 'A cidade que é Patrimônio Mundial da UNESCO e famosa pelos bonecos gigantes de Carnaval pertence a qual região?',
            regiao: 'reg-metropolitana',
            curiosidade: 'Olinda foi declarada Patrimônio da Humanidade em 1982 e o Homem da Meia-Noite desfila desde 1932!'
        },
        {
            tipo: 'mapa',
            pergunta: 'A região que concentra os antigos engenhos coloniais de cana-de-açúcar é:',
            regiao: 'reg-mata',
            curiosidade: 'A Zona da Mata foi o coração da economia açucareira colonial e ainda produz cana até hoje!'
        },
        {
            tipo: 'mapa',
            pergunta: 'A região onde se produz vinho tropical em pleno semiárido nordestino é:',
            regiao: 'reg-saofrancisco',
            curiosidade: 'As vinícolas do Vale do São Francisco produzem vinhos premiados internacionalmente em pleno sertão!'
        }
    ],


    cultura: [
        {
            pergunta: 'Qual manifestação cultural pernambucana foi declarada Patrimônio Imaterial da Humanidade pela UNESCO em 2012?',
            opcoes: ['Maracatu', 'Frevo', 'Caboclinho', 'Ciranda'],
            certa: 1,
            curiosidade: 'O Frevo nasceu nas ruas do Recife no final do século XIX, misturando capoeira, marcha e polca!'
        },
        {
            pergunta: 'O Maracatu Nação, tradição afro-brasileira do Recife, tem origem em qual tipo de cerimônia?',
            opcoes: ['Rituais de colheita indígena', 'Coroações de reis e rainhas do Congo', 'Festas católicas portuguesas', 'Celebrações holandesas'],
            certa: 1,
            curiosidade: 'O Maracatu Nação do Porto, Leão Coroado, é o mais antigo em atividade, fundado em 1863!'
        },
        {
            pergunta: 'Mestre Vitalino é reconhecido mundialmente por suas obras de arte feitas em qual material?',
            opcoes: ['Madeira', 'Barro', 'Pedra-sabão', 'Couro'],
            certa: 1,
            curiosidade: 'As peças de Mestre Vitalino retratam cenas do cotidiano sertanejo e estão no Museu do Louvre, em Paris!'
        },
        {
            pergunta: 'O Carnaval de Olinda é famoso por seus enormes bonecos que desfilam pelas ladeiras. Como eles são chamados?',
            opcoes: ['Caboclos de lança', 'Bonecos gigantes', 'Papangus', 'Calungas'],
            certa: 1,
            curiosidade: 'O boneco mais famoso é o Homem da Meia-Noite, que desfila desde 1932 na madrugada do sábado de Carnaval!'
        },
        {
            pergunta: 'A Ciranda é uma dança de roda típica do litoral pernambucano. Qual artista ficou conhecida como a Rainha da Ciranda?',
            opcoes: ['Selma do Coco', 'Lia de Itamaracá', 'Dona Selma', 'Marinês'],
            certa: 1,
            curiosidade: 'Lia de Itamaracá é Patrimônio Vivo de Pernambuco e canta cirandas desde os anos 1960 na Ilha de Itamaracá!'
        },
        {
            pergunta: 'O Manguebeat é um movimento cultural que surgiu no Recife nos anos 1990. Qual artista é considerado seu principal idealizador?',
            opcoes: ['Alceu Valença', 'Chico Science', 'Lenine', 'Nação Zumbi'],
            certa: 1,
            curiosidade: 'Chico Science misturou maracatu, funk e rock, criando um som único que colocou Recife no mapa mundial da música!'
        },
        {
            pergunta: 'A Literatura de Cordel nordestina recebe esse nome porque os folhetos eram:',
            opcoes: ['Escritos com cordas de sisal', 'Pendurados em cordéis (barbantes) nas feiras', 'Encadernados com fios de algodão', 'Vendidos por um poeta chamado Cordel'],
            certa: 1,
            curiosidade: 'Em 2018, a Literatura de Cordel foi reconhecida como Patrimônio Cultural Imaterial do Brasil pelo IPHAN!'
        }
    ],

    historia: [
        {
            pergunta: 'A Revolução Pernambucana de 1817, primeiro movimento republicano do Brasil, durou quantos dias?',
            opcoes: ['30 dias', '75 dias', '120 dias', '180 dias'],
            certa: 1,
            curiosidade: 'A bandeira de Pernambuco atual foi inspirada na bandeira criada pelos revolucionários de 1817!'
        },
        {
            pergunta: 'Frei Caneca, herói pernambucano fuzilado em 1825, liderou qual importante movimento?',
            opcoes: ['Revolução Praieira', 'Confederação do Equador', 'A Cabanada', 'Revolta dos Alfaiates'],
            certa: 1,
            curiosidade: 'Nenhum carrasco quis executar Frei Caneca. Ele acabou sendo fuzilado por soldados, pois ninguém aceitou enforcá-lo!'
        },
        {
            pergunta: 'As Batalhas dos Guararapes (1648-1649), travadas em Pernambuco, são consideradas o berço de qual instituição brasileira?',
            opcoes: ['Da Marinha do Brasil', 'Do Exército Brasileiro', 'Da Polícia Militar', 'Do Corpo de Bombeiros'],
            certa: 1,
            curiosidade: 'Nos Guararapes, negros, indígenas e brancos lutaram juntos pela primeira vez, simbolizando a formação do povo brasileiro!'
        },
        {
            pergunta: 'Maurício de Nassau, que governou Pernambuco entre 1637 e 1644, representava qual país europeu?',
            opcoes: ['Portugal', 'Espanha', 'Holanda', 'França'],
            certa: 2,
            curiosidade: 'Nassau construiu a primeira ponte da América Latina, trouxe artistas e cientistas e promoveu liberdade religiosa!'
        },
        {
            pergunta: 'O Quilombo dos Palmares, maior quilombo das Américas, ficava na região que hoje pertence a qual estado?',
            opcoes: ['Pernambuco', 'Alagoas', 'Paraíba', 'Bahia'],
            certa: 1,
            curiosidade: 'Palmares resistiu por quase 100 anos (1597-1694) e chegou a ter mais de 20 mil habitantes sob liderança de Zumbi!'
        },
        {
            pergunta: 'A Insurreição Pernambucana (1645-1654) teve como objetivo principal:',
            opcoes: ['Proclamar a independência de Portugal', 'Expulsar os holandeses do Nordeste', 'Abolir a escravidão no Brasil', 'Criar uma república nordestina'],
            certa: 1,
            curiosidade: 'João Fernandes Vieira, André Vidal de Negreiros, Henrique Dias e Felipe Camarão são os 4 heróis da Insurreição!'
        },
        {
            pergunta: 'Qual cangaceiro nascido em Serra Talhada ficou conhecido como o "Rei do Cangaço"?',
            opcoes: ['Antônio Silvino', 'Lampião', 'Corisco', 'Jesuíno Brilhante'],
            certa: 1,
            curiosidade: 'Lampião dominava leitura, escrita e até costura — ele mesmo fazia seus chapéus e roupas ornamentadas!'
        },
        {
            pergunta: 'A Revolução Praieira de 1848, ocorrida no Recife, é considerada a última revolta provincial de qual período?',
            opcoes: ['Período Colonial', 'Período Imperial (Regências)', 'Primeira República', 'Era Vargas'],
            certa: 1,
            curiosidade: 'A Praieira defendia o voto universal, nacionalização do comércio e liberdade de imprensa — ideias muito à frente de seu tempo!'
        }
    ],

    clima: [
        {
            pergunta: 'Qual bioma exclusivamente brasileiro predomina no Sertão de Pernambuco?',
            opcoes: ['Cerrado', 'Mata Atlântica', 'Caatinga', 'Pantanal'],
            certa: 2,
            curiosidade: 'A Caatinga abriga mais de 900 espécies de plantas e 300 de peixes, muitas delas endêmicas (só existem ali)!'
        },
        {
            pergunta: 'Quantos tipos climáticos diferentes existem em Pernambuco?',
            opcoes: ['Apenas 1 (tropical)', 'Pelo menos 3 tipos diferentes', 'Apenas 2 (úmido e seco)', 'Apenas 1 (semiárido)'],
            certa: 1,
            curiosidade: 'PE tem clima tropical úmido no litoral, semiárido no Sertão e tropical de altitude no Agreste!'
        },
        {
            pergunta: 'O Rio São Francisco, que banha o sertão pernambucano, nasce em qual estado?',
            opcoes: ['Pernambuco', 'Minas Gerais', 'Bahia', 'Goiás'],
            certa: 1,
            curiosidade: 'O "Velho Chico" percorre 2.863 km e é tão importante que é chamado de "Rio da Integração Nacional"!'
        },
        {
            pergunta: 'Fernando de Noronha pertence a Pernambuco e é reconhecida como Patrimônio Natural Mundial pela UNESCO. Qual é seu principal ecossistema?',
            opcoes: ['Manguezais costeiros', 'Recifes de coral e vida marinha', 'Restinga e dunas', 'Floresta tropical densa'],
            certa: 1,
            curiosidade: 'Em Noronha, é possível avistar golfinhos rotadores em grupos de até 2.000 indivíduos na Baía dos Golfinhos!'
        },
        {
            pergunta: 'A Serra da Borborema, que cruza o Agreste de Pernambuco, causa qual fenômeno climático importante?',
            opcoes: ['Provoca terremotos frequentes', 'Bloqueia ventos úmidos, deixando o Sertão mais seco', 'Aumenta as chuvas no Sertão', 'Gera neve nas cidades serranas'],
            certa: 1,
            curiosidade: 'A Borborema funciona como uma barreira natural: o litoral recebe muita chuva, enquanto o sertão fica no "lado seco"!'
        },
        {
            pergunta: 'A irrigação às margens do Rio São Francisco transformou Petrolina em polo de exportação de quais produtos?',
            opcoes: ['Café e cacau', 'Manga e uva', 'Soja e milho', 'Algodão e cana'],
            certa: 1,
            curiosidade: 'Petrolina produz uvas e vinhos em pleno semiárido! A região permite até 3 safras de uva por ano!'
        },
        {
            pergunta: 'O Recife é uma das capitais mais chuvosas do Brasil. Aproximadamente quantos mm de chuva recebe por ano?',
            opcoes: ['Cerca de 800 mm', 'Cerca de 1.500 mm', 'Mais de 2.400 mm', 'Cerca de 600 mm'],
            certa: 2,
            curiosidade: 'A maioria das chuvas do Recife se concentra entre março e agosto, época chamada de "inverno" pelos recifenses!'
        }
    ],

    culinaria: [
        {
            pergunta: 'O bolo de rolo, iguaria símbolo de Pernambuco com finas camadas recheadas de goiabada, é uma adaptação de qual doce europeu?',
            opcoes: ['Strudel austríaco', 'Rocambole português (Colchão de Noiva)', 'Croissant francês', 'Panettone italiano'],
            certa: 1,
            curiosidade: 'Um bom bolo de rolo pode ter mais de 20 camadas finíssimas! Quanto mais camadas, melhor a qualidade!'
        },
        {
            pergunta: 'A cartola é uma sobremesa típica pernambucana. Quais são seus ingredientes principais?',
            opcoes: ['Tapioca com coco e leite condensado', 'Banana frita com queijo coalho, açúcar e canela', 'Bolo de mandioca com goiabada', 'Pamonha doce com sorvete'],
            certa: 1,
            curiosidade: 'O nome "cartola" vem do formato: a banana no fundo é a aba do chapéu e o queijo derretido por cima é a copa!'
        },
        {
            pergunta: 'A tapioca nordestina é feita a partir da goma extraída de qual tubérculo?',
            opcoes: ['Inhame', 'Batata-doce', 'Mandioca', 'Cará'],
            certa: 2,
            curiosidade: 'A palavra "tapioca" vem do tupi "tipyóca", que significa "coisa que coagula", descrevendo o processo da goma!'
        },
        {
            pergunta: 'O acarajé, presente no Recife, é uma herança da culinária de qual povo?',
            opcoes: ['Indígena', 'Portuguesa', 'Africana (iorubá)', 'Holandesa'],
            certa: 2,
            curiosidade: 'O acarajé tem origem religiosa: é um alimento ritual oferecido a Iansã no candomblé!'
        },
        {
            pergunta: 'O queijo coalho, muito consumido em Pernambuco, recebe esse nome por causa de:',
            opcoes: ['Da cidade onde foi inventado', 'Do processo de coagulação do leite usado na fabricação', 'Da textura semelhante a coalhada', 'Do recipiente usado para armazená-lo'],
            certa: 1,
            curiosidade: 'O queijo coalho no palito, assado na brasa com melaço, é presença obrigatória nas praias de Pernambuco!'
        },
        {
            pergunta: 'A buchada de bode, prato típico do Sertão pernambucano, é preparada de que forma?',
            opcoes: ['Costela de bode assada lentamente', 'Vísceras de bode cozidas dentro do estômago do animal', 'Carne de bode desfiada com pirão', 'Pernil de bode marinado em vinha-d\'alho'],
            certa: 1,
            curiosidade: 'A buchada representa a tradição sertaneja de aproveitamento total do animal, sem desperdício!'
        },
        {
            pergunta: 'Qual fruta nativa do Nordeste é usada para fazer o famoso "vinho de jurubeba" e também sucos no interior de PE?',
            opcoes: ['Umbu', 'Cajá', 'Pitomba', 'Siriguela'],
            certa: 1,
            curiosidade: 'O umbuzeiro é chamado de "árvore sagrada do sertão" porque armazena até 3 mil litros de água em suas raízes!'
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