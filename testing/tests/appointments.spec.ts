import { test, expect } from '@playwright/test';

test.describe('Appointments Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/appointments');
  });

  test('shows appointments list and providers', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Appointments' })).toBeVisible();
    await expect(page.getByText('Dr. Nguyen')).toBeVisible();
    await expect(page.getByText('Family Medicine')).toBeVisible();
    await expect(page.getByText('Dr. Patel')).toBeVisible();
    await expect(page.getByText('Cardiology')).toBeVisible();
    await expect(page.getByText('Confirmed')).toBeVisible();
    await expect(page.getByText('Requested')).toBeVisible();
  });

  test('new appointment button navigates to schedule form', async ({ page }) => {
    await page.getByRole('button', { name: /New Appointment/i }).click();
    await expect(page).toHaveURL(/\/appointments\/new/);
  });

  test('details buttons link to appointment details', async ({ page }) => {
    await expect(page.locator('#appointments-details-apt-1')).toHaveAttribute('href', '/appointments/apt-1');
    await expect(page.locator('#appointments-details-apt-2')).toHaveAttribute('href', '/appointments/apt-2');
  });

  test('appointment status colors', async ({ page }) => {
    // Confirmed (green)
    const confirmed = page.getByText('Confirmed');
    await expect(confirmed).toHaveClass(/text-green-600/);
    // Requested (yellow)
    const requested = page.getByText('Requested');
    await expect(requested).toHaveClass(/text-yellow-500/);
  });
});
