import ScrollSuave from "./moudeles/scroll-suave.js"
import Accordion from "./moudeles/accordion.js"
import TabNav from "./moudeles/tabnav.js"
import Modal from "./moudeles/modal.js"
import Tooltip from "./moudeles/tooltip.js"
import fetchAnimais from "./moudeles/fetch-animais.js"
import fetchBitcoin from "./moudeles/fetch-bitcoin.js"
import ScrollAnima from "./moudeles/scroll-anima.js"
import DropdownMenu from "./moudeles/dropdown-menu.js"
import MenuMobile from "./moudeles/menu-mobile.js"
import Funcionamento from "./moudeles/funcionamento.js"
import SlideNav from "./moudeles/slide.js"

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()

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

const dropdownMenu = new DropdownMenu('[data-dropdown]')
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]','[data-menu="list"]')
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]', 'aberto')
funcionamento.init()

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls')

fetchAnimais('../../animaisapi.json', '.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')



