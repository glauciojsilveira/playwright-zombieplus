// @ts-check
const { test, expect } = require('@playwright/test');
const { LandingPage } = require('../pages/LandingPage')
const { Toast } = require('../pages/Components')

/** @type {import('../pages/LandingPage').LandingPage} */
let landingPage
/** @type {import('../pages/Components').Toast} */
let toast

test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page)
    toast = new Toast(page)
})

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
    // visit home page
    await landingPage.visit();

    // Open Lead Modal
    await landingPage.openLeadModal();

    // submit Lead Form
    await landingPage.submitLeadForm('Glaucio Júnior', 'glauio@gmail.com');

    // toast Have text
    const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!';
    await toast.toastHasText(message);

});

test('Não deve cadastrar com e-mail inválido', async ({ page }) => {

    // visit home page
    await landingPage.visit();

    // Open Lead Modal
    await landingPage.openLeadModal();

    // submit Lead Form
    await landingPage.submitLeadForm('Glaucio Júnior', 'glauio.com');

    await landingPage.alertHaveText('Email incorreto');

});

test('Não deve cadastrar quando o nome não é preenchido', async ({ page }) => {

    // visit home page
    await landingPage.visit();

    // Open Lead Modal
    await landingPage.openLeadModal();

    // submit Lead Form
    await landingPage.submitLeadForm('', 'glauio@gmail.com');

    await landingPage.alertHaveText('Campo obrigatório');


});

test('Não deve cadastrar quando o e-mail não é preenchido', async ({ page }) => {

    // visit home page
    await landingPage.visit();

    // Open Lead Modal
    await landingPage.openLeadModal();

    // submit Lead Form
    await landingPage.submitLeadForm('Glaucio Júnior', '');

    await landingPage.alertHaveText('Campo obrigatório');

});

test('Não deve cadastrar quando nenhum campo é preenchido', async ({ page }) => {

    // visit home page
    await landingPage.visit();

    // Open Lead Modal
    await landingPage.openLeadModal();

    // submit Lead Form
    await landingPage.submitLeadForm('','');

    await landingPage.alertHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
    ]);


});
