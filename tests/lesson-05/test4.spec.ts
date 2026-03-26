import { test, expect } from '@playwright/test';

test('Thêm sản phẩm', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.getByRole('link', { name: '	Bài học 4: Personal notes' }).click();

    await test.step("Step 2: Điền vào filed", async () => {
        await page.locator("//input[@id='new-task']").fill();
    
    });
});