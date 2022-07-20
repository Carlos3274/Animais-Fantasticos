export default function iniTabNav() {
  // seleciona as imgagens 
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  // tabContent = seções
  const tabContent = document.querySelectorAll('[data-tab="content"] section')  
  // adiciona 'ativo' na seção index
  function activeTab(index){ 
    tabContent.forEach((section) => {
      section.classList.remove('ativo')
    })
    const direcao = tabContent[index].dataset.anime
    
    tabContent[index].classList.add('ativo', direcao) 
  }
  // verifica se existe tabmenu e tabcontent
  if(tabMenu.length && tabContent.length){
    // começar com uma seção ativa no site
    tabContent[0].classList.add('ativo')

  // para cada 'li' do menu, adiciona o evento de escuta,
  // caso haja o click, chama o activeTab(index)
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click',() => {
      // function callback
      activeTab(index)
      })
    })
  } 
}

