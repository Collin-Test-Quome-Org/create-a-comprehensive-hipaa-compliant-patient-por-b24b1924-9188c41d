import { test, expect } from '@playwright/test';

test.describe('Medical Records Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/medical-records');
  });

  test('shows page title and record list', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Medical Records' })).toBeVisible();
    await expect(page.getByText('CBC Panel')).toBeVisible();
    await expect(page.getByText('Annual Physical')).toBeVisible();
    await expect(page.getByText('Lab Result · 2024-07-13')).toBeVisible();
    await expect(page.getByText('Visit Summary · 2024-06-02')).toBeVisible();
    await expect(page.getByText('Ready')).toHaveCount(2);
  });

  test('search filters records by name and type', async ({ page }) => {
    const searchInput = page.locator('#records-search');
    await searchInput.fill('cbc');
    await expect(page.getByText('CBC Panel')).toBeVisible();
    await expect(page.getByText('Annual Physical')).not.toBeVisible();
    await searchInput.fill('visit');
    await expect(page.getByText('Annual Physical')).toBeVisible();
    await expect(page.getByText('CBC Panel')).not.toBeVisible();
    await searchInput.fill('xxxx');
    await expect(page.getByText('No records found. Try a different search.')).toBeVisible();
  });

  test('upload document button navigates to upload page', async ({ page }) => {
    await page.getByRole('button', { name: /upload document/i }).click();
    await expect(page).toHaveURL(/\/medical-records\/upload/);
    await expect(page.getByRole('heading', { name: /Upload Medical Document/i })).toBeVisible();
  });

  test('download buttons have correct links and attributes', async ({ page }) => {
    const downloadCBC = page.locator('#records-download-rec-1');
    const downloadPhysical = page.locator('#records-download-rec-2');
    await expect(downloadCBC).toBeVisible();
    await expect(downloadCBC.locator('a')).toHaveAttribute('href', '/mock-files/cbc-panel.pdf');
    await expect(downloadCBC.locator('a')).toHaveAttribute('target', '_blank');
    await expect(downloadCBC.locator('a')).toHaveAttribute('rel', /noopener/);
    await expect(downloadPhysical.locator('a')).toHaveAttribute('href', '/mock-files/annual-physical.pdf');
  });

  test('page has accessible search input', async ({ page }) => {
    await expect(page.getByPlaceholder('Search records...')).toBeVisible();
    await expect(page.getByLabel('Search records...')).toBeVisible();
  });
});
