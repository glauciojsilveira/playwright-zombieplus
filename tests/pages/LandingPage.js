const { expect } = require('@playwright/test');

class LandingPage {

    constructor(page) {
        this.page = page;
    }

    async visit() {
        await this.page.goto('http://localhost:3000/');
    }

    async openLeadModal() {
        await this.page.getByRole('button', { name: /Aperte o play/i }).click();
        await expect (this.page.getByTestId('modal').getByRole('heading')).toHaveText('Fila de espera');
    }

    async submitLeadForm(name, email) {
        await this.page.getByPlaceholder('Informe seu nome').fill(name);
        await this.page.getByPlaceholder('Informe seu email').fill(email);
    // await page.getByText('Quero entrar na fila!').click();
        await this.page.getByTestId('modal').getByText('Quero entrar na fila!').click();
    }   

    
    
    async alertHaveText(target) {
        const alerts = this.page.locator('span[class$="alert"]');
        if (Array.isArray(target)) {
            await expect(alerts).toHaveCount(target.length);
            for (let i = 0; i < target.length; i += 1) {
                await expect(alerts.nth(i)).toHaveText(target[i]);
            }
        } else {
            await expect(alerts).toHaveText(target);
        }
    }

}

module.exports = { LandingPage };