import { test, expect } from '@playwright/test';

test.describe('Secure Messaging Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/messaging');
  });

  test('shows conversations and new message button', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Secure Messaging/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /New Message/i })).toBeVisible();
    await expect(page.getByText('Dr. Patel')).toBeVisible();
    await expect(page.getByText('Lab Results Follow Up')).toBeVisible();
    await expect(page.getByText('Dr. Nguyen')).toBeVisible();
    await expect(page.getByText('Prescription Refill')).toBeVisible();
    await expect(page.getByText('Thank you for the update! I have some questions.')).toBeVisible();
    await expect(page.getByText('Your refill has been approved and sent to your pharmacy.')).toBeVisible();
  });

  test('unread conversation row has "New" badge and highlight', async ({ page }) => {
    const unreadRow = page.locator('.bg-blue-50').filter({ hasText: 'Dr. Patel' });
    await expect(unreadRow.getByText('New')).toBeVisible();
    await expect(unreadRow).toBeVisible();
  });

  test('details buttons link to conversation details', async ({ page }) => {
    await expect(page.locator('#messaging-details-conv-1')).toHaveAttribute('href', '/messaging/conv-1');
    await expect(page.locator('#messaging-details-conv-2')).toHaveAttribute('href', '/messaging/conv-2');
  });

  test('new message button navigates to compose page', async ({ page }) => {
    await page.getByRole('button', { name: /New Message/i }).click();
    await expect(page).toHaveURL(/\/messaging\/new/);
  });
});
