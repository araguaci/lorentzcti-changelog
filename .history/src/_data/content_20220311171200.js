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
        color: 'orange',
        faicon: 'circle',
        datetime: '2022-03-11',
        title: 'V3.225 - Em Desenvolvimento',
        body: "<ul><li>Finalização de Telas para Importação de Campanhas Automáticas</li><li>Criação de Filtros para Realimentar Campanhas</li><li>Relatórios para Acompanhamento de Performance de Campanha</li></ul>",
        image: {
            link: '#',
            src: '/img/logo.png',
            alt: 'lorentz',
            caption: '',
        },
    },
    {
        id: 'lorentz',
        categories: ['instalador'],
        color: 'blue',
        faicon: 'check-circle',
        datetime: '2021-08-20',
        title: 'V3.224',
        body: "<ul><li>Criação de pacote para instalador com telas CRM</li></ul>",
    },
    {
        id: 'lorentz',
        categories: ['melhoria', 'correção'],
        color: 'green',
        faicon: 'check-circle',
        datetime: '2021-08-19',
        title: 'V3.223',
        body: "<ul><li>Ativar e Destativar Pausa de Agente pelo Supervisor</li><li>Criando Tarefas por Agente para Atendimentos CRM</li><li>Criando Tarefas por Agente para Cliente CRM</li></ul>",
    },
    {
        id: 'lorentz',
        categories: ['relatório'],
        color: 'violet',
        faicon: 'fa-bar-chart',
        datetime: '2021-04-21',
        title: 'V3.222',
        body: "<ul><li>Montagem de Estatísticas e Filtros Atendimento CRM</li><li>Relatórios e Interface Atendimento CRM para Cliente Lorentz</li></ul>",
    },
    {
        id: 'lorentz',
        categories: ['melhoria'],
        color: 'green',
        faicon: 'fa-refresh',
        datetime: '2021-02-15',
        title: 'V3.221',
        body: "<ul><li>Integrando Lorentz CRM com Cliente Lorentz</li></ul>",
    },
    {
        id: 'lorentz',
        categories: ['relatório'],
        color: 'violet',
        faicon: 'fa-pie-chart',
        datetime: '2021-08-20',
        title: 'V3.220',
        body: "<ul><li>Telas de Estatísticas por Agente em Atendimento CRM </li></ul>",
    },
    {
        id: 'lorentz',
        categories: ['melhoria'],
        color: 'green',
        faicon: 'check-circle',
        datetime: '2020-08-17',
        title: 'V3.219',
        body: "<ul><li>Habilitando Login Grupo Ramal Webfone Lorentz</li></ul>",
    },
    {
        id: 'lorentz',
        categories: ['melhoria'],
        color: 'green',
        faicon: 'check-circle',
        datetime: '2020-08-16',
        title: 'V3.218',
        body: "<ul><li>Habilitando módulo Webfone Lorentz </li></li><li>Pesquisa Satisfação URA</li><li>Relatórios de Satisfação URA	</li><ul><li>Acumulado	</li><li>Mensal	</li><li>Analítico</li></ul></ul><br />Homólogo Cliente Lorentz executado pelo navegador, somente para ramais analógicos.",
    },
    {
        id: 'lorentz',
        categories: ['melhoria'],
        color: 'green',
        faicon: 'check-circle',
        datetime: '2020-07-01',
        title: 'V3.217',
        body: "<ul><li>Documentação API de Integração </li></ul>",
    },
    {
        id: 'lorentz',
        categories: ['melhoria'],
        color: 'green',
        faicon: 'check-circle',
        datetime: '2020-06-09',
        title: 'V3.216',
        body: "<ul><li>Criando API de Integração </li></ul><br />Criação de end-point para executar consulta de informações de chamada e execução de chamadas pelo Cliente Lorentz.",
    },
    {
        id: 'lorentz',
        categories: ['melhoria'],
        color: 'green',
        faicon: 'check-circle',
        datetime: '2021-08-20',
        title: 'V3.215 - Iniciando Lorentz',
        body: "<ul><li>Criação de Sistema Lorentz</li></li><li>Incremento de Versão: 2.214  => Versão: 3.215</li><li>Adaptação de Telas e Logos Lorentz </li></ul>",
    },
    {
        id: 'lorentz',
        categories: ['melhoria'],
        color: 'green',
        faicon: 'check-circle',
        datetime: '2021-08-20',
        title: 'V2.214 - Encerrando Attender',
        body: "<ul><li>Inclusão de Telas CRM dentro do Supervisor </li><ul><li>Cadastros 	</li><li>Relatórios </li></ul><li>Habilitando Relatórios de Histórico por Banco de Dados	</li><li>Para ambientes com elevado número de Chamadas</li>",
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