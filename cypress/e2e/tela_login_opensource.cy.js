///<reference types="cypress"/>
import Login from '../support/pages/login' 
describe("testes na página de login do site opensource-demo", ()=>{
    beforeEach('visitando página',()=>{ 
      Login.visitar_page()

    })

    it('verificar se os campos de login estão vazios',()=>{ 
      Login.campo_vazios()
      
    })
  
    it('verificar se botão de login existe',()=>{ 
      Login.existir()
      
    })

    it('testando visibilidade dos campos e botão de login',()=>{ 
      Login.visibilidade()

    })

    it('validação de login',()=>{ 
      Login.logar()

    })

}) 