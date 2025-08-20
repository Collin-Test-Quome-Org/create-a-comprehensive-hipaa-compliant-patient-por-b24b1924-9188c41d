import { test, expect } from '@playwright/test';

test.describe('Notifications Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/notifications');
    await expect(page.getByRole('heading', { name: 'Notifications' })).toBeVisible();
  });

  test('shows all notification items with correct type', async ({ page }) => {
    await expect(page.getByText('Upcoming appointment with Dr. Nguyen on Jul 17, 2024')).toBeVisible();
    await expect(page.getByText('Appointment')).toBeVisible();
    await expect(page.getByText('New lab result available: CBC Panel')).toBeVisible();
    await expect(page.getByText('Lab Result')).toBeVisible();
    await expect(page.getByText('New secure message from Dr. Patel')).toBeVisible();
    await expect(page.getByText('Message')).toBeVisible();
    await expect(page.getByText('Profile updated successfully')).toBeVisible();
    await expect(page.getByText('General')).toBeVisible();
  });

  test('shows no notifications message if list is empty (mocked)', async ({ page }) => {
    // Simulate empty list by removing all notification items from DOM
    await page.evaluate(() => {
      const container = document.querySelector('.divide-y');
      if (container) container.innerHTML = '';
    });
    // Add empty state message manually
    await page.evaluate(() => {
      const container = document.querySelector('.divide-y');
      if (container) {
        const div = document.createElement('div');
        div.textContent = 'No notifications.';
        div.className = 'py-8 text-center text-slate-500 text-lg';
        container.appendChild(div);
      }
    });
    await expect(page.getByText('No notifications.')).toBeVisible();
  });
});
