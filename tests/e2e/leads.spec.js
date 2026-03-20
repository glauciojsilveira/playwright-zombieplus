// @ts-check
const { test, expect } = require('@playwright/test'); // Importando as dependências necessárias para os testes
const { LandingPage } = require('../pages/LandingPage') // Importando a classe LandingPage para interagir com a página de destino
const { Toast } = require('../pages/Components') // Importando a classe Toast para interagir com os componentes de notificação
const { faker } = require('@faker-js/faker')   // Importando a biblioteca Faker para gerar dados de teste aleatórios

/** @type {import('../pages/LandingPage').LandingPage} */
let landingPage
/** @type {import('../pages/Components').Toast} */
let toast
/** @type {string} */
let leadEmail = ''
/** @type {string} */
let leadName = ''

test.beforeEach(async ({ page }) => { // Executado antes de cada teste
    landingPage = new LandingPage(page)
    toast = new Toast(page)
})



test('deve cadastrar um lead na fila de espera', async ({ page }) => {
    const leadName = faker.person.fullName() // Gerando um nome de lead aleatório para o teste
    const leadEmail = faker.internet.email() // Gerando um email de lead aleatório para o teste 
    // visit home page
    await landingPage.visit();
    // Open Lead Modal
    await landingPage.openLeadModal();
    // submit Lead Form
    await landingPage.submitLeadForm(leadName, leadEmail);
    // toast Have text
    const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!';
    await toast.toastHasText(message);

});

test('Não deve cadastrar quando o E-mail que já existe', async ({ page, request }) => {
    const leadName = faker.person.fullName() // Gerando um nome de lead aleatório para o teste
    const leadEmail = faker.internet.email() // Gerando um email de lead aleatório para o teste 

    const newLead = await request.post('http://localhost:3333/leads', {
        data: {
            name: leadName,
            email: leadEmail
        }
    })
    expect(newLead.status()).toBe(201); // Verificando se a resposta da criação do lead foi bem-sucedida (status 201)
    expect(newLead.ok()).toBeTruthy(); // Verificando se a resposta da criação do lead foi bem-sucedida (status 201) ou um ou otro
    
    await landingPage.visit();
    await landingPage.openLeadModal();
    await landingPage.submitLeadForm(leadName, leadEmail);
    await toast.toastHasText('O endereço de e-mail fornecido já está registrado em nossa fila de espera.');
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
