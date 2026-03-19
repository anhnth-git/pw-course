import { test, expect } from '@playwright/test';

test('Nhập thông tin và đăng ký', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  await test.step("Step 2: Điền thông tin username", async () => {
    await page.locator("//input[@id='username']").pressSequentially("Hồ Nhật Huy", { delay: 200 });
    await page.locator("//input[@id='email']").pressSequentially("huynd@gamil.com", { delay: 200 });
    await page.locator("//input[@id='male']").check();
    await page.locator("//input[@id='reading']").check();
    await page.locator("//select[@id='interests']").selectOption({ value: "science" });
    await page.locator("//select[@id='country']").selectOption({ value: "usa" });
    await page.locator("//input[@id='dob']").fill("2026-01-11");
    await page.locator("//textarea[@id='bio']").fill("jafhgaohf");
    await page.locator("//button[@type='submit']").dblclick();
  });
});
