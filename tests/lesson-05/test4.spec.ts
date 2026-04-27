import { test, expect } from '@playwright/test';

test('Thêm sản phẩm', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.getByRole('link', { name: '	Bài học 4: Personal notes' }).click();

    await test.step("Step 2: Điền vào filed", async () => {
        await page.locator("//textarea[@id='note-content']").fill("Hương Anh");
        await page.getByRole('textbox', {name: 'Title'}).fill('test1');
        await page.getByRole('button', {name: 'Add Note'}).click();
    });
});