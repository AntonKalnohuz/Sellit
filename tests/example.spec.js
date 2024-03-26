// @ts-check
const { test, expect } = require('@playwright/test');

test('Visual Regression Test Home', async ({ page }) => {
  page.setViewportSize({ width: 1280, height: 13779 });
  await page.goto('https://silsdev.wpengine.com/');
  await page.waitForTimeout(15000);
  //const screenshot = await page.screenshot({ fullPage: true });
  await expect(page).toHaveScreenshot('home.png');
});

test('Visual Regression Test Plus', async ({ page }) => {
  page.setViewportSize({ width: 1440, height: 18446 });
  await page.goto('https://silsdev.wpengine.com/membership-plus/');
  await page.waitForTimeout(15000);
  //const screenshot = await page.screenshot({ fullPage: true });
  await expect(page).toHaveScreenshot('plus.png');
});
