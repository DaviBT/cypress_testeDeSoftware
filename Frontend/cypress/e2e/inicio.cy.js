describe('Página Principal', () => {

  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')

    // área do presente
    cy.getByData('presente').find("h3", ).should("contain", "Conta e cartão gratuitos")
    cy.getByData('presente').find("p", ).should("contain", "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.")
    
    // área do saque
    cy.getByData('sacar').find("h3", ).should("contain", "Saques sem custo")
    cy.getByData('sacar').find("p", ).should("contain", "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.")

    // área da estrela/pontos
    cy.getByData('pontos').find("p", ).should('contain', 'Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.getByData('pontos').find("h3", ).should('contain', 'Programa de pontos')

    // area dos dispositivos
    cy.getByData('dispositivos').find("h3", ).should('contain', 'Seguro Dispositivos')
    // cy.getByData('dispositivos').find("p", ).should('contain', ' Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')

    // imagens
    cy.getByData('icone').should("be.visible")
    cy.getByData('imagem').should("be.visible")

    // comando personalizado
    cy.getByName('dispositivos').find("p").should("contain", "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.")
  })
})