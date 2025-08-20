import { test, expect } from '@playwright/test';

test.describe('Global Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows logo and all main menu items', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByRole('link', { name: /ShieldLink Health/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Dashboard/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Records/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Appointments/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Prescriptions/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Messaging/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Notifications/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Login/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Sign Up/ })).toBeVisible();
  });

  test('navigation links route to correct pages', async ({ page }) => {
    await page.getByRole('link', { name: /Dashboard/ }).click();
    await expect(page).toHaveURL(/\/dashboard/);
    await page.getByRole('link', { name: /Records/ }).click();
    await expect(page).toHaveURL(/\/medical-records/);
    await page.getByRole('link', { name: /Appointments/ }).click();
    await expect(page).toHaveURL(/\/appointments/);
    await page.getByRole('link', { name: /Prescriptions/ }).click();
    await expect(page).toHaveURL(/\/prescriptions/);
    await page.getByRole('link', { name: /Messaging/ }).click();
    await expect(page).toHaveURL(/\/messaging/);
    await page.getByRole('link', { name: /Notifications/ }).click();
    await expect(page).toHaveURL(/\/notifications/);
    await page.getByRole('button', { name: /Login/ }).click();
    await expect(page).toHaveURL(/\/login/);
    await page.goto('/');
    await page.getByRole('button', { name: /Sign Up/ }).click();
    await expect(page).toHaveURL(/\/signup/);
  });
});
