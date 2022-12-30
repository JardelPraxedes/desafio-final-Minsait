///<reference types="cypress"/>
import Login from '../support/pages/login' 
import Home_test from '../support/pages/home-page'
describe("testes na home page do site opensource-demo", ()=>{
    beforeEach('logando na página',()=>{ 
      Login.visitar_page()
      Login.logar()

    })

    it('visibilidade dos links do menu',()=>{ 
        Home_test.visibilidade()
  
      })

    it('existência dos links do menu',()=>{ 
        Home_test.existencia()
  
      })

    it('visibilidade da imagem do usuário',()=>{ 
        Home_test.img_user()
  
      })
      
    it('validando visibilidade da logo do menu',()=>{
        Home_test.logo_menu()
    })
    
  



}) 