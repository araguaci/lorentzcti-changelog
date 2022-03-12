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
    categories: ['desenvolvimento'],
    color: 'green',
    faicon: 'check-square',
    datetime: '2020-03-24',
    title: 'V3.215',
    body: "<ul><li>Finalização de Telas para Importação de Campanhas Automáticas</li><li>Criação de Filtros para Realimentar Campanhas</li><li>Relatórios para Acompanhamento de Performance de Campanha</li></ul>",
}, ];

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