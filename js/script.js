import ScrollSuave from "./moudeles/scroll-suave.js"
import initAnimacaoScroll from "./moudeles/scroll-animacao.js"
import Accordion from "./moudeles/accordion.js"
import TabNav from "./moudeles/tabnav.js"
import Modal from "./moudeles/modal.js"
import Tooltip from "./moudeles/tooltip.js"
import initDropdownMenu from "./moudeles/dropdown-menu.js"
import initMenuMobile from "./moudeles/menu-mobile.js"
import initFuncionamento from "./moudeles/funcionamento.js"
import fetchAnimais from "./moudeles/fetch-animais.js"
import fetchBitcoin from "./moudeles/fetch-bitcoin.js"

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

fetchAnimais('../../animaisapi.json', '.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')

initDropdownMenu()
initMenuMobile()
initFuncionamento()
initAnimacaoScroll()


