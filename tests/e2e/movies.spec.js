const { test } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage')
const { Toast } = require('../pages/Components')
const { MoviesPage } = require('../pages/MoviesPage')

let loginPage
let toast
let moviesPage;

test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page)
    toast = new Toast(page)
    moviesPage = new MoviesPage(page)
})


test('Deve poder cadastra um novo filme', async ({ page }) => {
    
        await loginPage.visit()
        await loginPage.submit('admin@zombieplus.com', 'pwd123')
        await moviesPage.isLoggedIn()

        
    
    // é importante estar logado para acessar a página de filmes
    // Aqui você pode adicionar mais ações para cadastrar um novo filme, como preencher formulários, clicar em botões, etc.
});
