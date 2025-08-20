import { test, expect } from '@playwright/test';

test.describe('Appointments Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/appointments');
    await expect(page.getByRole('heading', { name: 'Appointments' })).toBeVisible();
  });

  test('displays all appointments with correct data', async ({ page }) => {
    await expect(page.getByText('Dr. Nguyen')).toBeVisible();
    await expect(page.getByText('Family Medicine')).toBeVisible();
    await expect(page.getByText('10:00am - 10:30am')).toBeVisible();
    await expect(page.getByText('Virtual')).toBeVisible();
    await expect(page.getByText('Confirmed')).toBeVisible();
    await expect(page.getByText('Dr. Patel')).toBeVisible();
    await expect(page.getByText('Cardiology')).toBeVisible();
    await expect(page.getByText('2:00pm - 2:45pm')).toBeVisible();
    await expect(page.getByText('In-Person')).toBeVisible();
    await expect(page.getByText('Requested')).toBeVisible();
  });

  test('new appointment button navigates', async ({ page }) => {
    await page.getByRole('button', { name: /New Appointment/i }).click();
    await expect(page).toHaveURL(/\/appointments\/new/);
  });

  test('details buttons navigate to correct appointment details', async ({ page }) => {
    await page.getByRole('button', { name: 'Details', exact: true }).first().click();
    await expect(page).toHaveURL(/\/appointments\/apt-1/);
    await page.goto('/appointments');
    await page.getByRole('button', { name: 'Details', exact: true }).nth(1).click();
    await expect(page).toHaveURL(/\/appointments\/apt-2/);
  });
});
