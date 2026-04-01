const { expect } = require('@playwright/test')

class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async visit() {
    await this.page.goto('http://localhost:3000/admin/login')

    const loginform = this.page.locator('.login-form')
    await expect(loginform).toBeVisible()

    }

    async submit(email, password) {

        await this.page.getByPlaceholder('E-mail').fill(email);
        await this.page.getByPlaceholder('Senha').fill(password);
        
        await this.page.getByText('Entrar').click();
        // await this.page.locator('//button[text()="Entrar"]').click();
        
    }

    async alertEmailHaveText(text) {
        const alert = this.page.locator('.email-alert');
        await expect(alert).toHaveText(text);
    }

    async alertPasswordHaveText(text) {
    const alert = this.page.locator('.password-alert');
    await expect(alert).toHaveText(text);
}


}

module.exports = { LoginPage };
