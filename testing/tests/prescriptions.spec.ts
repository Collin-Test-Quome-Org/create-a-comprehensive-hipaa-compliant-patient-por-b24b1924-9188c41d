import { test, expect } from '@playwright/test';

test.describe('Prescriptions Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/prescriptions');
  });

  test('shows list of prescriptions', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Prescriptions/ })).toBeVisible();
    await expect(page.getByText('Atorvastatin 20mg')).toBeVisible();
    await expect(page.getByText('Lisinopril 10mg')).toBeVisible();
    await expect(page.getByText('Prescribed by Dr. Patel')).toBeVisible();
    await expect(page.getByText('Prescribed by Dr. Nguyen')).toBeVisible();
    await expect(page.getByText('Last filled: 2024-06-28')).toBeVisible();
    await expect(page.getByText('Last filled: 2024-07-03')).toBeVisible();
    await expect(page.getByText('Refills left: 2')).toBeVisible();
    await expect(page.getByText('Refills left: 0')).toBeVisible();
  });

  test('refill button disabled when no refills left', async ({ page }) => {
    await expect(page.locator('#prescriptions-refill-rx-2')).toBeDisabled();
    await expect(page.locator('#prescriptions-refill-rx-1')).toBeEnabled();
  });

  test('details buttons link to prescription details', async ({ page }) => {
    await expect(page.locator('#prescriptions-details-rx-1')).toHaveAttribute('href', '/prescriptions/rx-1');
    await expect(page.locator('#prescriptions-details-rx-2')).toHaveAttribute('href', '/prescriptions/rx-2');
  });

  test('refill button is present and clickable when enabled', async ({ page }) => {
    await page.locator('#prescriptions-refill-rx-1').click();
    // No navigation, just check button is clickable and present
    await expect(page.locator('#prescriptions-refill-rx-1')).toBeVisible();
  });
});
