/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

describe('Cadastro', () => {
    it('Quando informar os dados e finalizar, então o cadastro deve ser efetuado', () => {

        cy.intercept({

            method: 'POST',
            url: 'https://marketplace-api-develop.tendaatacado.com.br/api/public/client/v2/pre-registration'
        }, {
            statusCode: 201,
            fixture: 'cadastro-com-sucesso'
                

        }).as('preUsers')

        cy.intercept({

            method: 'PATCH',
            url: 'https://marketplace-api-develop.tendaatacado.com.br/api/public/client/v2/access-code/'
        }, {
            statusCode: 200,
            body: {
             "valid":true}
        
        }).as('pathUsers')

        cy.visit('/')

        cy.get('button.userPrincipalText').click()
        cy.contains('span', 'Criar conta').click()
        cy.url().should('contain','cadastro')
        cy.get('input[value=juridica]').check()
        cy.get('input#nome').type('Frederico Pizzaro')
        cy.get('input[name=cnpj]').clear().type('43256399000189')
        cy.get('input#email').type('fredericopizzaro7@gmail.com')
        cy.get('input[name=cellphone]').clear().type('9999555-5555')
        cy.get('input#password').type('882013Cm@')
        cy.get('input#password2').type('882013Cm@')
        cy.get('input#optIn').check()
        cy.get('div.btn-create-account').click()
        cy.contains('Continuar').should('be.visible')
        cy.get('input#code').type('99O6CE')
        cy.contains('button', 'Continuar').click()
        cy.contains('Cadastro').should('be.visible')
        
    });

    it('Quando informar os dados com um usuário já existente, então o cadastro não deve ser concluído', () => {

        cy.intercept({

            method: 'POST',
            url: 'https://marketplace-api-develop.tendaatacado.com.br/api/public/client/v2/pre-registration'
        }, {
            statusCode: 409,
            fixture: 'cadastro-usuario-existente' 
        
        }).as('preUsers')

        cy.visit('/')

        cy.get('button.userPrincipalText').click()
        cy.contains('span', 'Criar conta').click()
        cy.url().should('contain','cadastro')
        cy.get('input[value=juridica]').check()
        cy.get('input#nome').type('Frederico Pizzaro')
        cy.get('input[name=cnpj]').type('43256399000189')
        cy.get('input#email').type('fredericopizzaro7@gmail.com')
        cy.get('input[name=cellphone]').clear().type('9999555-5555')
        cy.get('input#password').type('882013Cm@')
        cy.get('input#password2').type('882013Cm@')
        cy.get('input#optIn').check()
        cy.get('div.btn-create-account').click()
        cy.contains('Recuperar senha').should('be.visible')
  
    });
});