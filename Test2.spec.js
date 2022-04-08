describe('Test task', () => {
    it('Sign out of the administrator account.', () => {
          cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
              headers: {
                  Authorization :"Basic ZmFicmlxdWU6ZmFicmlxdWU="
              }
          })
          cy.viewport(1920,1080)
          cy.get('input[type="email"]').type('admin@admin.ad')
              cy.get('input[type="password"]').type('admin')
              cy.contains('Далее').click()
              cy.contains('Главный администратор').click()
              cy.contains('Выйти из системы').click()
              cy.contains('Вход в систему')

          
    })
})