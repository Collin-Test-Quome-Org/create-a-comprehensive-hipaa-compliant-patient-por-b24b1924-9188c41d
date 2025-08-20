// Playwright test for Dashboard page
import { test, expect } from '@playwright/test';

test.describe('Dashboard Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');
  });

  test('should display welcome, actions, and notifications', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Welcome back to ShieldLink Health!' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'View Medical Records' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Manage Appointments' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Secure Messaging' })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Notifications' })).toBeVisible();
    // Notifications list
    await expect(page.getByText('Upcoming appointment with Dr. Nguyen on Jul 17, 2024')).toBeVisible();
    await expect(page.getByText('New lab result available: CBC Panel')).toBeVisible();
    await expect(page.getByText('New secure message from Dr. Patel')).toBeVisible();
    await expect(page.getByRole('link', { name: 'View all' })).toBeVisible();
  });

  test('action buttons should navigate correctly', async ({ page }) => {
    await page.getByRole('button', { name: 'View Medical Records' }).click();
    await expect(page).toHaveURL(/medical-records/);
    await page.goBack();
    await page.getByRole('button', { name: 'Manage Appointments' }).click();
    await expect(page).toHaveURL(/appointments/);
    await page.goBack();
    await page.getByRole('button', { name: 'Secure Messaging' }).click();
    await expect(page).toHaveURL(/messaging/);
  });

  test('should show Upcoming Appointments and allow navigation', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Upcoming Appointments' })).toBeVisible();
    await expect(page.getByText('Jul 17, 2024 - Dr. Nguyen - Family Medicine')).toBeVisible();
    await expect(page.getByText('10:00am - 10:30am | Virtual Visit')).toBeVisible();
    await expect(page.getByRole('button', { name: 'View Details' })).toBeVisible();
    await page.getByRole('button', { name: 'View Details' }).click();
    await expect(page).toHaveURL(/appointments\/1/);
  });
});
