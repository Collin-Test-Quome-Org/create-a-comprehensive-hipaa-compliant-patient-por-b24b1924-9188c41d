// Playwright test for Prescriptions page
import { test, expect } from '@playwright/test';

test.describe('Prescriptions Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/prescriptions');
  });

  test('should display prescriptions with refill and details buttons', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Prescriptions' })).toBeVisible();
    await expect(page.getByText('Atorvastatin 20mg')).toBeVisible();
    await expect(page.getByText('Lisinopril 10mg')).toBeVisible();
    await expect(page.getByText('Prescribed by Dr. Patel')).toBeVisible();
    await expect(page.getByText('Prescribed by Dr. Nguyen')).toBeVisible();
    await expect(page.getByText('Refills left: 2')).toBeVisible();
    await expect(page.getByText('Refills left: 0')).toBeVisible();
  });

  test('refill button is disabled when no refills left', async ({ page }) => {
    const refillDisabled = page.locator('#prescriptions-refill-rx-2');
    await expect(refillDisabled).toBeDisabled();
    const refillEnabled = page.locator('#prescriptions-refill-rx-1');
    await expect(refillEnabled).toBeEnabled();
  });

  test('details button navigates to prescription details page', async ({ page }) => {
    await page.locator('#prescriptions-details-rx-1').click();
    await expect(page).toHaveURL(/prescriptions\/rx-1/);
  });
});
