// Playwright test for Appointments page
import { test, expect } from '@playwright/test';

test.describe('Appointments Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/appointments');
  });

  test('should display appointments and New Appointment button', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Appointments' })).toBeVisible();
    await expect(page.getByRole('button', { name: /New Appointment/ })).toBeVisible();
    await expect(page.getByText('Dr. Nguyen')).toBeVisible();
    await expect(page.getByText('Dr. Patel')).toBeVisible();
    await expect(page.getByText('Confirmed')).toBeVisible();
    await expect(page.getByText('Requested')).toBeVisible();
  });

  test('should navigate to New Appointment page', async ({ page }) => {
    await page.getByRole('button', { name: /New Appointment/ }).click();
    await expect(page).toHaveURL(/appointments\/new/);
  });

  test('Details button navigates to appointment detail page', async ({ page }) => {
    await page.getByRole('button', { name: 'Details' }).first().click();
    await expect(page).toHaveURL(/appointments\/apt-1/);
  });
});
