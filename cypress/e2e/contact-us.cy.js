/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        // cypress code
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html', { pageLoadTimeout: 10000})
        
        // cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('blogs')
        cy.get('[name="email"]').type('joe_blogs@gmail.com')
        cy.get('textarea.feedback-input').type("How can i learn cypress")
        cy.get('[type="submit"]').click();
    });

    it.only("Should not be able to submit a successful submission via contact us form", () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html', { pageLoadTimeout: 10000}) 
        cy.get('[name="first_name"]').type('Tom')
        cy.get('[name="last_name"]').type('blogs')
        cy.get('textarea.feedback-input').type("How can i learn cypress")
        cy.get('[type="submit"]').click();
    });
    
})