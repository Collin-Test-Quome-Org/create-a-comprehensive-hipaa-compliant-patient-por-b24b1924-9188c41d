import { test, expect } from '@playwright/test';

test.describe('Prescriptions Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/prescriptions');
    await expect(page.getByRole('heading', { name: 'Prescriptions' })).toBeVisible();
  });

  test('displays all prescriptions with correct info and refill button state', async ({ page }) => {
    // Atorvastatin row
    const atorRow = page.getByText('Atorvastatin 20mg').locator('..');
    await expect(atorRow.getByText('Prescribed by Dr. Patel')).toBeVisible();
    await expect(atorRow.getByText('Last filled: 2024-06-28')).toBeVisible();
    await expect(atorRow.getByText('Refills left: 2')).toBeVisible();
    await expect(atorRow.getByRole('button').filter({ has: page.locator('svg') }).filter({ hasText: '' }).nth(0)).toBeEnabled();
    // Lisinopril row
    const lisinoprilRow = page.getByText('Lisinopril 10mg').locator('..');
    await expect(lisinoprilRow.getByText('Prescribed by Dr. Nguyen')).toBeVisible();
    await expect(lisinoprilRow.getByText('Last filled: 2024-07-03')).toBeVisible();
    await expect(lisinoprilRow.getByText('Refills left: 0')).toBeVisible();
    // Refill button should be disabled
    await expect(lisinoprilRow.getByRole('button').filter({ has: page.locator('svg') }).filter({ hasText: '' }).first()).toBeDisabled();
  });

  test('details buttons navigate to prescription detail', async ({ page }) => {
    await page.getByRole('button', { name: '', exact: true }).nth(1).click();
    await expect(page).toHaveURL(/\/prescriptions\/rx-1/);
    await page.goto('/prescriptions');
    await page.getByRole('button', { name: '', exact: true }).nth(3).click();
    await expect(page).toHaveURL(/\/prescriptions\/rx-2/);
  });
});
