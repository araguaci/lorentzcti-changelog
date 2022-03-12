const header = 'Melhorias Supervisor LorentzCTI Call Center';
const footer = '2022 © MEGATRONIX Telecomunicações e Sistemas Ltda.';
/* https://faicons.com/ 
    shield
    trophy
    safari
    rebel
    recycle
    globe
    anchor
    bolt
    https://surfguru.com.br/conteudo/costao-pro-2022-acontecera-nos-dias-11-a-13-de-marco-na-praia-do-santinho-2022-02-17-27642.html
    https://cbsurf.org.br/
    https://www.canalsurfstorm.com/
*/
const entries = [{
        id: 'lorentz',
        categories: ['melhoria'],
        color: 'green',
        faicon: 'check-square-o',
        datetime: '2020-03-24',
        title: 'V3.215',
        body: "<ul><li>Finalização de Telas para Importação de Campanhas Automáticas</li><li>Criação de Filtros para REalimentar Campanhas</li><li>Relatórios para Acompanhamento de Performance de Campanha</li></ul>",
    },
    {
        id: 'surf',
        categories: ['surf'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2020-12-21',
        title: '2020 - Ian Gouveia',
        body: "CAMPEÃO FECASURF - Ian Gouveia (PE) em 1 etapa virtual pela internet",
        image: {
            link: 'https://www.canalsurfstorm.com/post/ian-gouveia-e-o-campeao-nacional-masculino-do-cbsurf-pro-tour',
            src: 'https://static.wixstatic.com/media/6e45c0_c7b7f8ec66af4a828969ee6232c8009a~mv2.jpg/v1/fill/w_360,h_249,al_c,q_90/6e45c0_c7b7f8ec66af4a828969ee6232c8009a~mv2.webp',
            alt: 'Ian Gouveia é campeão do circuito brasileiro de surf 2020',
            caption: 'Canal Surf Storm',
        },
        links: [{
            href: 'https://www.waves.com.br/videos/clips/ian-gouveia-altos-e-baixos-de-2020/',
            linkText: 'Altos e baixos de 2020',
            href: 'https://www.canalsurfstorm.com/post/ian-gouveia-e-o-campeao-nacional-masculino-do-cbsurf-pro-tour',
            linkText: 'Ian Gouveia é campeão do circuito brasileiro de surf 2020',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'joaquina'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2019-03-24',
        title: '2019 - Luan Wood',
        body: "CAMPEÃO FECASURF - Luan Wood (SC)",
        image: {
            link: 'https://www.waves.com.br/noticias/competicao/profissional/2019-wood-vence-na-joaca/',
            src: 'https://www.waves.com.br/wp-content/uploads/2019/03/Luan-Wood-campea%CC%83o-do-Floripa-Surf-Pro-2019.-Foto-Basilio-Ruy-P.P07-696x435.jpg',
            alt: 'Catarinense Profissional - Wood vence na Joaca',
            caption: 'Waves',
        },
        links: [{
            href: 'https://www.waves.com.br/noticias/competicao/profissional/2019-wood-vence-na-joaca/',
            linkText: 'Wood Vence Na Joaca',
            href: 'https://surfguru.com.br/conteudo/luan-wood-vence-o-floripa-surf-pro-na-joaquina-2019-03-25-13533.html',
            linkText: 'Luan Wood vence o Floripa Surf Pro na Joaquina - Competições - Comunidade - Surfguru',
        }, ],
    },
    {
        id: 'dog',
        categories: ['dog'],
        color: 'green',
        faicon: 'dog',
        datetime: '2021-05-01 23:55',
        title: 'Puppies are great too',
        image: {
            link: 'http://place-puppy.com',
            src: 'https://place-puppy.com/300x300',
            alt: 'A placeholder puppy',
            caption: 'Puppy!',
        },
        body: 'Doggo ipsum sub woofer smol wow very biscit aqua doggo pupper dat tungg tho big ol pupper, very jealous pupper mlem heckin angery woofer very jealous pupper. Blep waggy wags long doggo, corgo. Tungg wow such tempt mlem very jealous pupper boofers lotsa pats, snoot smol big ol ruff doge super chub, long doggo heckin good boys and girls h*ck heck. Shoober blop many pats borkf, such treat. Big ol what a nice floof long water shoob wrinkler heck sub woofer, pupper porgo wow very biscit.',
        links: [{
            href: 'https://en.wikipedia.org/wiki/Dog',
            linkText: 'Dog',
        }, ],
    },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
    const filters = new Set();
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
            for (var j = 0; j < entry.categories.length; j++) {
                filters.add(entry.categories[j]);
            }
        }
    }
    var filtersArray = [...filters];
    filtersArray.sort();
    return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
    for (const entry of entries) {
        if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
            entry.categoriesString = entry.categories.join(',');
        }
    }
    return entries;
};

module.exports = {
    header,
    footer,
    entries: addCategoriesStringsToEntries(entries),
    filters: getFilters(entries),
    head: {
        title: pageTitle,
        description: pageDescription,
        author: pageAuthor,
    },
};