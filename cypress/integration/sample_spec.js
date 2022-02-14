//Digite 'npx cypress open' no terminal para abrir o navegador e executar os testes com cypress

describe('Testando simulador de investimentos.', () => {
  it('Verificando se o resultado foi gerado com os campos vazios.', () => {
    cy.visit('http://localhost:2000/')

    cy.contains('Simular').click()
    cy.get('.error').contains('Aporte deve ser um número.')
  })

  it('Verificando se os inputs atualizam com uma entrada correta.', () => {
      cy.get('#aporteInicial').type('1200').blur()
      cy.get('#prazoMeses').type('12').blur()
      cy.get('#aporteMensal').type('500').blur()
      cy.get('#rentabilidade').type('17').blur()
  })

  it('Verificando se com os dados corretos o resultado é gerado.', () => {
    cy.contains('Simular').click()
  })
})
