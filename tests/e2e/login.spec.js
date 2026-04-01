const { faker } = require('@faker-js/faker');

const { test, expect } = require('../support/index');

test('deve logar como administrador', async ({ page }) => {
        await page.login.visit()
        await page.login.submit('admin@zombieplus.com', 'pwd123')
        await page.movies.isLoggedIn()

    })

test('Não deve logar com senha incorreta', async ({ page }) => {
        await page.login.visit()
        await page.login.submit('admin@zombieplus.com', 'abc123')

        const errorMessage = 'Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.'

        await page.toast.containText(errorMessage)

    })

test('Não deve logar sem o email preenchido ',  async ({ page }) => {
    await page.login.visit()
    await page.login.submit('', 'abc123');
    await page.login.alertEmailHaveText('Campo obrigatório');
})

test('Não deve logar quando a senha estiver vazia',  async ({ page }) => {
    await page.login.visit()
    await page.login.submit('admin@zombieplus.com', '');
    await page.login.alertPasswordHaveText('Campo obrigatório');
})



