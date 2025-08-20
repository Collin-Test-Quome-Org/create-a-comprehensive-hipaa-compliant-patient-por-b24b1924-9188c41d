// Playwright test for Medical Records page
import { test, expect } from '@playwright/test';

test.describe('Medical Records Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/medical-records');
  });

  test('should display list of records and search bar', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Medical Records' })).toBeVisible();
    await expect(page.getByPlaceholder('Search records...')).toBeVisible();
    await expect(page.getByText('CBC Panel')).toBeVisible();
    await expect(page.getByText('Lab Result · 2024-07-13')).toBeVisible();
    await expect(page.getByText('Annual Physical')).toBeVisible();
    await expect(page.getByText('Visit Summary · 2024-06-02')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upload Document' })).toBeVisible();
  });

  test('should filter records by search', async ({ page }) => {
    await page.getByPlaceholder('Search records...').fill('CBC');
    await expect(page.getByText('CBC Panel')).toBeVisible();
    await expect(page.locator('text=Annual Physical')).toHaveCount(0);

    await page.getByPlaceholder('Search records...').fill('Summary');
    await expect(page.getByText('Annual Physical')).toBeVisible();
    await expect(page.locator('text=CBC Panel')).toHaveCount(0);
  });

  test('should show no results when nothing matches', async ({ page }) => {
    await page.getByPlaceholder('Search records...').fill('XYZ');
    await expect(page.getByText('No records found. Try a different search.')).toBeVisible();
  });

  test('download buttons should have correct links and open in new tab', async ({ page }) => {
    const downloadLinks = page.locator('a[href$="cbc-panel.pdf"], a[href$="annual-physical.pdf"]');
    await expect(downloadLinks.first()).toHaveAttribute('target', '_blank');
    await expect(downloadLinks.first()).toHaveAttribute('rel', /noopener/);
  });

  test('Upload Document button navigates to upload page', async ({ page }) => {
    await page.getByRole('button', { name: 'Upload Document' }).click();
    await expect(page).toHaveURL(/medical-records\/upload/);
    await expect(page.getByRole('heading', { name: 'Upload Medical Document' })).toBeVisible();
  });
});
