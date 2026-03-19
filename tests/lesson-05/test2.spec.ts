import { test, expect } from '@playwright/test';

test('Thêm sản phẩm', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();

    await test.step("Step 2: Thêm sản phẩm", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
        await page.locator("//button[@data-product-id='2']").click({
            button: 'left',
            clickCount: 3
        });
        await page.locator("//button[@data-product-id='3']").click();
    });
});
