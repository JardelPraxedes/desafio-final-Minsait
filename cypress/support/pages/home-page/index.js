const el = require("./elements").ELEMENTS;

class Home_test {
    visibilidade(){
        cy.get(el.time).should("be.visible")
        cy.get(el.recruitment).should("be.visible")
        cy.get(el.pim).should("be.visible")
        cy.get(el.perfomance).should("be.visible")
        cy.get(el.my_info).should("be.visible")
        cy.get(el.admin).should("be.visible")
        cy.get(el.leave).should("be.visible")
        cy.get(el.directory).should("be.visible")
        cy.get(el.dashbord).should("be.visible")
        cy.get(el.buzz).should("be.visible")
        cy.get(el.maintenance).should("be.visible")
    }

    existencia(){
        cy.get(el.time).should("exist")
        cy.get(el.recruitment).should("exist")
        cy.get(el.pim).should("exist")
        cy.get(el.perfomance).should("exist")
        cy.get(el.my_info).should("exist")
        cy.get(el.admin).should("exist")
        cy.get(el.leave).should("exist")
        cy.get(el.directory).should("exist")
        cy.get(el.dashbord).should("exist")
        cy.get(el.buzz).should("exist")
        cy.get(el.maintenance).should("exist")
    }

    img_user(){
        cy.get(el.img_user).should("be.visible")
    }

    logo_menu(){
        cy.get(el.logo_menu).should("be.visible")
    }


}

export default new Home_test()