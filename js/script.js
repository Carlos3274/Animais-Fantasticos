import ScrollSuave from "./moudeles/scroll-suave.js"
import initAnimacaoScroll from "./moudeles/scroll-animacao.js"
import Accordion from "./moudeles/accordion.js"
import TabNav from "./moudeles/tabnav.js"
import initModal from "./moudeles/modal.js"
import initTooltip from "./moudeles/tooltip.js"
import initDropdownMenu from "./moudeles/dropdown-menu.js"
import initMenuMobile from "./moudeles/menu-mobile.js"
import initFuncionamento from "./moudeles/funcionamento.js"
import initFetchAnimais from "./moudeles/fetch-animais.js"
import initFetchBitcoin from "./moudeles/fetch-bitcoin.js"

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init();

initModal()
initTooltip()
initDropdownMenu()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
initAnimacaoScroll()


