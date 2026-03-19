import { test, expect } from '@playwright/test';

test('Thêm sản phẩm', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

    let text = "";
    for (let i = 0; i < 100; i++) {
        text += "todo" + i;
    }

    await test.step("Step 2: Thêm mới todo", async () => {
        await page.locator("//input[@id='new-task']").fill(text);
    });
});
