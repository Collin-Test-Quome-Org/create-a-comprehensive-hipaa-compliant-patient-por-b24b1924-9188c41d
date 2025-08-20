import { test, expect } from '@playwright/test';

test.describe('Messaging Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/messaging');
    await expect(page.getByRole('heading', { name: 'Secure Messaging' })).toBeVisible();
  });

  test('shows all conversations with correct content and unread badge', async ({ page }) => {
    const conv1 = page.getByText('Dr. Patel').locator('..'); // Get parent
    await expect(conv1.getByText('Lab Results Follow Up')).toBeVisible();
    await expect(conv1.getByText('Thank you for the update! I have some questions.')).toBeVisible();
    await expect(conv1.getByText('Jul 15, 2024')).toBeVisible();
    await expect(conv1.getByText('New')).toBeVisible();

    const conv2 = page.getByText('Dr. Nguyen').locator('..');
    await expect(conv2.getByText('Prescription Refill')).toBeVisible();
    await expect(conv2.getByText('Your refill has been approved and sent to your pharmacy.')).toBeVisible();
    await expect(conv2.getByText('Jul 10, 2024')).toBeVisible();
    await expect(conv2.getByText('New')).not.toBeVisible();
  });

  test('new message button navigates', async ({ page }) => {
    await page.getByRole('button', { name: /New Message/i }).click();
    await expect(page).toHaveURL(/\/messaging\/new/);
  });

  test('details buttons navigate to conversation detail', async ({ page }) => {
    await page.getByRole('button', { name: 'View', exact: true }).first().click();
    await expect(page).toHaveURL(/\/messaging\/conv-1/);
    await page.goto('/messaging');
    await page.getByRole('button', { name: 'View', exact: true }).nth(1).click();
    await expect(page).toHaveURL(/\/messaging\/conv-2/);
  });
});
