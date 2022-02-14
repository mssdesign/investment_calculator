//Digite 'npx cypress open' no terminal para executar os testes

describe('Teste do simulador de investimentos', () => {
  it('Verificando se o resultado foi gerado.', () => {
    cy.visit('http://localhost:2000/')

    cy.contains('Simular').click()
  })
})
