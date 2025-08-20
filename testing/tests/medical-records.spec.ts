import { test, expect } from '@playwright/test';

test.describe('Medical Records Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/medical-records');
    await expect(page.getByRole('heading', { name: 'Medical Records' })).toBeVisible();
  });

  test('displays all medical records by default', async ({ page }) => {
    await expect(page.getByText('CBC Panel')).toBeVisible();
    await expect(page.getByText('Annual Physical')).toBeVisible();
    await expect(page.getByText('Lab Result · 2024-07-13')).toBeVisible();
    await expect(page.getByText('Visit Summary · 2024-06-02')).toBeVisible();
    await expect(page.getByText('Ready')).toHaveCount(2);
  });

  test('search filters the records', async ({ page }) => {
    const search = page.getByRole('searchbox', { name: 'Search records...' });
    await search.fill('cbc');
    await expect(page.getByText('CBC Panel')).toBeVisible();
    await expect(page.getByText('Annual Physical')).not.toBeVisible();
    await search.fill('visit');
    await expect(page.getByText('Annual Physical')).toBeVisible();
    await expect(page.getByText('CBC Panel')).not.toBeVisible();
  });

  test('shows no records message when nothing matches search', async ({ page }) => {
    await page.getByRole('searchbox', { name: 'Search records...' }).fill('xyznotfound');
    await expect(page.getByText('No records found. Try a different search.')).toBeVisible();
  });

  test('upload document button navigates to upload', async ({ page }) => {
    await page.getByRole('button', { name: 'Upload Document' }).click();
    await expect(page).toHaveURL(/medical-records\/upload/);
    await expect(page.getByRole('heading', { name: 'Upload Medical Document' })).toBeVisible();
  });

  test('download buttons have correct aria-labels and hrefs', async ({ page }) => {
    const record1 = page.getByRole('button', { name: 'Download CBC Panel' });
    await expect(record1.locator('a')).toHaveAttribute('href', '/mock-files/cbc-panel.pdf');
    await expect(record1).toHaveAttribute('aria-label', 'Download CBC Panel');
    const record2 = page.getByRole('button', { name: 'Download Annual Physical' });
    await expect(record2.locator('a')).toHaveAttribute('href', '/mock-files/annual-physical.pdf');
    await expect(record2).toHaveAttribute('aria-label', 'Download Annual Physical');
  });
});
