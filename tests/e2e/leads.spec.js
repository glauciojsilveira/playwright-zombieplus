
const { request } = require('node:http');
const { faker } = require('@faker-js/faker');
const { test, expect } = require('../support/index');



test('deve cadastrar um lead na fila de espera', async ({ page }) => {
    const randomName = faker.person.fullName()
    const randomEmail = faker.internet.email()
    
    await page.landing.visit();
    await page.landing.openLeadModal();
    await page.landing.submitLeadForm(randomName, randomEmail);

    // toast Have text
    const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!';
    await page.toast.containText(message);

});

test('Não deve cadastrar quando o email já existe', async ({ page, request }) => {

    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

    const newLead = await request.post('http://localhost:3333/leads', {
        data: {
            name: randomName,
            email: randomEmail
        }
    })  

    // expect(newLead.status()).toBe(201);
    expect(newLead.ok()).toBeTruthy();
    
    await page.landing.visit();
    await page.landing.openLeadModal();
    await page.landing.submitLeadForm(randomName, randomEmail);
    // toast Have text
    const message = 'O endereço de e-mail fornecido já está registrado em nossa fila de espera.'
    await page.toast.containText(message);

});


test('Não deve cadastrar com e-mail inválido', async ({ page }) => {

    await page.landing.visit();
    await page.landing.openLeadModal();
    // submit Lead Form
    await page.landing.submitLeadForm('Glaucio Júnior', 'glauio.com');

    await page.landing.alertHaveText('Email incorreto');

});

test('Não deve cadastrar quando o nome não é preenchido', async ({ page }) => {

    // visit home page
    await page.landing.visit();

    // Open Lead Modal
    await page.landing.openLeadModal();

    // submit Lead Form
    await page.landing.submitLeadForm('', 'glauio@gmail.com');

    await page.landing.alertHaveText('Campo obrigatório');


});

test('Não deve cadastrar quando o e-mail não é preenchido', async ({ page }) => {

    // visit home page
    await page.landing.visit();

    // Open Lead Modal
    await page.landing.openLeadModal();

    // submit Lead Form
    await page.landing.submitLeadForm('Glaucio Júnior', '');

    await page.landing.alertHaveText('Campo obrigatório');

});

test('Não deve cadastrar quando nenhum campo é preenchido', async ({ page }) => {

    // visit home page
    await page.landing.visit();

    // Open Lead Modal
    await page.landing.openLeadModal();

    // submit Lead Form
    await page.landing.submitLeadForm('','');

    await page.landing.alertHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
    ]);


});
