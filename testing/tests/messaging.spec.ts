// Playwright test for Messaging page
import { test, expect } from '@playwright/test';

test.describe('Messaging Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/messaging');
  });

  test('should display conversations and New Message button', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Secure Messaging' })).toBeVisible();
    await expect(page.getByRole('button', { name: /New Message/ })).toBeVisible();
    await expect(page.getByText('Dr. Patel')).toBeVisible();
    await expect(page.getByText('Dr. Nguyen')).toBeVisible();
    await expect(page.getByText('Lab Results Follow Up')).toBeVisible();
    await expect(page.getByText('Prescription Refill')).toBeVisible();
    await expect(page.getByText('Thank you for the update! I have some questions.')).toBeVisible();
    await expect(page.getByText('Your refill has been approved and sent to your pharmacy.')).toBeVisible();
    await expect(page.getByText('Jul 15, 2024')).toBeVisible();
    await expect(page.getByText('Jul 10, 2024')).toBeVisible();
  });

  test('unread conversation is visually marked', async ({ page }) => {
    // The "New" badge should be visible for unread
    await expect(page.getByText('New').first()).toBeVisible();
    // The background color for unread row (bg-blue-50) can be checked via CSS if desired
  });

  test('Details button navigates to conversation details', async ({ page }) => {
    await page.locator('#messaging-details-conv-1').click();
    await expect(page).toHaveURL(/messaging\/conv-1/);
  });

  test('New Message button navigates to create message page', async ({ page }) => {
    await page.getByRole('button', { name: /New Message/ }).click();
    await expect(page).toHaveURL(/messaging\/new/);
  });
});
