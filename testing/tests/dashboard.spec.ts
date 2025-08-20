import { test, expect } from '@playwright/test';

test.describe('Dashboard Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');
  });

  test('renders welcome message and key actions', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Welcome back to ShieldLink Health!/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /View Medical Records/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Manage Appointments/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Secure Messaging/i })).toBeVisible();
  });

  test('shows notifications in side card', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Notifications' })).toBeVisible();
    await expect(page.getByText('Upcoming appointment with Dr. Nguyen on Jul 17, 2024')).toBeVisible();
    await expect(page.getByText('New lab result available: CBC Panel')).toBeVisible();
    await expect(page.getByText('New secure message from Dr. Patel')).toBeVisible();
    await expect(page.getByRole('button', { name: /View all/i })).toBeVisible();
  });

  test('key dashboard buttons navigate to correct pages', async ({ page }) => {
    await page.getByRole('button', { name: /View Medical Records/i }).click();
    await expect(page).toHaveURL(/\/medical-records$/);
    await page.goto('/dashboard');
    await page.getByRole('button', { name: /Manage Appointments/i }).click();
    await expect(page).toHaveURL(/\/appointments$/);
    await page.goto('/dashboard');
    await page.getByRole('button', { name: /Secure Messaging/i }).click();
    await expect(page).toHaveURL(/\/messaging$/);
  });

  test('recent records and appointments sections show correct info', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Upcoming Appointments/ })).toBeVisible();
    await expect(page.getByText('Jul 17, 2024 - Dr. Nguyen - Family Medicine')).toBeVisible();
    await expect(page.getByText('10:00am - 10:30am | Virtual Visit')).toBeVisible();
    await expect(page.getByRole('button', { name: /View Details/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Schedule New Appointment/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Recent Medical Records/ })).toBeVisible();
    await expect(page.getByText('CBC Panel - Jul 13, 2024')).toBeVisible();
    await expect(page.getByText('Status: Ready')).toBeVisible();
    await expect(page.getByRole('button', { name: /View Record/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /All Records/i })).toBeVisible();
  });
});
