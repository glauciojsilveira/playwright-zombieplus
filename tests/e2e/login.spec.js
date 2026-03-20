const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { Toast } = require('../pages/Components')
const { MoviesPage } = require('../pages/MoviesPage')

/** @type {import('../pages/LoginPage').LoginPage} */
/** @type {import('../pages/Components').Toast} */
/** @type {import('../pages/MoviesPage').MoviesPage} */

let loginPage
let toast
let moviesPage

test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page)
    toast = new Toast(page)
    moviesPage = new MoviesPage(page)
})


test('deve logar como administrador', async ({ page }) => {
        await loginPage.visit()
        await loginPage.submit('admin@zombieplus.com', 'pwd123')
        await moviesPage.isLoggedIn()

    })

test('Não deve logar com senha incorreta', async ({ page }) => {
        await loginPage.visit()
        await loginPage.visit()
        await loginPage.submit('admin@zombieplus.com', 'abc123')

        const errorMessage = 'Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.'
        await toast.toastHasText(errorMessage)

    })

test('Não deve logar com email inválido',  async ({ page }) => {
    await loginPage.visit()
    await loginPage.submit('glaucio.com.br', 'abc123');
    await loginPage.alertHaveText('Email incorreto');
})    

test('Não deve logar sem o email preenchido ',  async ({ page }) => {
    await loginPage.visit()
    await loginPage.submit('', 'abc123');
    await loginPage.alertHaveText('Campo obrigatório');
})

test('Não deve logar quando a senha estiver vazia',  async ({ page }) => {
    await loginPage.visit()
    await loginPage.submit('admin@zombieplus.com', '');
    await loginPage.alertHaveText('Campo obrigatório');
})

test('Não deve logar quando nenhum campo estiver preenchido',  async ({ page }) => {
    await loginPage.visit()
    await loginPage.submit('', '');
    await loginPage.alertHaveText(['Campo obrigatório', 'Campo obrigatório']);
})


