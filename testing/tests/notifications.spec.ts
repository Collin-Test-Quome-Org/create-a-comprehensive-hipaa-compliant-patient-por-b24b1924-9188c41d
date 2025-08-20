import { test, expect } from '@playwright/test';

test.describe('Notifications Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/notifications');
  });

  test('shows notifications list and details', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Notifications/ })).toBeVisible();
    await expect(page.getByText('Upcoming appointment with Dr. Nguyen on Jul 17, 2024')).toBeVisible();
    await expect(page.getByText('New lab result available: CBC Panel')).toBeVisible();
    await expect(page.getByText('New secure message from Dr. Patel')).toBeVisible();
    await expect(page.getByText('Profile updated successfully')).toBeVisible();
    await expect(page.getByText('Appointment')).toBeVisible();
    await expect(page.getByText('Lab Result')).toBeVisible();
    await expect(page.getByText('Message')).toBeVisible();
    await expect(page.getByText('General')).toBeVisible();
  });
});
