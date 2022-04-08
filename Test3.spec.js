describe('Test task', () => {
    it('Go to the "Contractors" section.', () => {
          cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
              headers: {
                  Authorization :"Basic ZmFicmlxdWU6ZmFicmlxdWU="
              }
          })
          cy.viewport(1920,1080)
          cy.get('input[type="email"]').type('admin@admin.ad')
              cy.get('input[type="password"]').type('admin')
              cy.contains('Далее').click()
              cy.contains('Контрагенты').click()
              cy.contains('Антон Иванов')

          
    })
})