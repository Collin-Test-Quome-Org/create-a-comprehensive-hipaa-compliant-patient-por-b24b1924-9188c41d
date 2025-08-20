import { test, expect } from '@playwright/test';

test.describe('Dashboard Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Assuming dashboard is the landing page after login
    await expect(page.getByRole('heading', { name: /shieldlink health/i })).toBeVisible();
  });

  test('shows welcome and action buttons', async ({ page }) => {
    await expect(page.getByText('Welcome back to ShieldLink Health!')).toBeVisible();
    await expect(page.getByRole('button', { name: 'View Medical Records' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Manage Appointments' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Secure Messaging' })).toBeVisible();
  });

  test('shows notifications and allows navigation to all notifications', async ({ page }) => {
    await expect(page.getByText('Notifications')).toBeVisible();
    await expect(page.getByText('Upcoming appointment with Dr. Nguyen on Jul 17, 2024')).toBeVisible();
    await expect(page.getByText('New lab result available: CBC Panel')).toBeVisible();
    await expect(page.getByText('New secure message from Dr. Patel')).toBeVisible();
    await page.getByRole('button', { name: 'View all' }).click();
    await expect(page).toHaveURL(/\/notifications/);
    await expect(page.getByRole('heading', { name: 'Notifications' })).toBeVisible();
  });

  test('upcoming appointments card content and navigation', async ({ page }) => {
    await expect(page.getByText(/Jul 17, 2024 - Dr. Nguyen - Family Medicine/)).toBeVisible();
    await expect(page.getByText(/10:00am - 10:30am \| Virtual Visit/)).toBeVisible();
    await page.getByRole('button', { name: 'View Details' }).click();
    await expect(page).toHaveURL(/\/appointments\/1/);
  });

  test('recent records card - view record and all records navigation', async ({ page }) => {
    await expect(page.getByText('CBC Panel - Jul 13, 2024')).toBeVisible();
    await expect(page.getByText('Status: Ready')).toBeVisible();
    await page.getByRole('button', { name: 'View Record' }).click();
    await expect(page).toHaveURL(/\/medical-records/);
    // Navigate back to dashboard and try 'All Records' button
    await page.goto('/');
    await page.getByRole('button', { name: 'All Records' }).click();
    await expect(page).toHaveURL(/\/medical-records/);
  });

  test('schedule new appointment navigation', async ({ page }) => {
    await page.getByRole('button', { name: 'Schedule New Appointment' }).click();
    await expect(page).toHaveURL(/\/appointments\/new/);
  });
});
