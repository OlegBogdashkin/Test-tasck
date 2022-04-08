describe('Test task', () => {
    it('Login to the administrator account with valid values.', () => {
          cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
              headers: {
                  Authorization :"Basic ZmFicmlxdWU6ZmFicmlxdWU="
              }
          })
          cy.get('input[type="email"]').type('admin@admin.ad')
              cy.get('input[type="password"]').type('admin')
              cy.contains('Далее').click()
              cy.contains('Платежи')

          
    })
})