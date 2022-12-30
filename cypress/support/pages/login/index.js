const el = require("./elements").ELEMENTS;

class Login {
    visitar_page(){
        cy.visit(el.url)
    }
    
    logar(){
        cy.get(el.user_login).type(el.conteudo_login)
        cy.get(el.passaword_login).type(el.conteudo_senha)
        cy.get(el.botao_login).click()
    }

    visibilidade(){
        cy.get(el.user_login).should("be.visible")
        cy.get(el.passaword_login).should("be.visible")
        cy.get(el.botao_login).should("be.visible")
    }
    
    campo_vazios() {
        cy.get(el.user_login).should("be.empty")
        cy.get(el.passaword_login).should("be.empty")
    }

    existir() {
        cy.get(el.botao_login).should("exist")
    }

}

export default new Login()