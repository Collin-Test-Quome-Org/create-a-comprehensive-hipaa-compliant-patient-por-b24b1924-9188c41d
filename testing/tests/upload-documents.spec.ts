// Playwright test for Upload Documents page
import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload Medical Document Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/medical-records/upload');
  });

  test('should show upload form and branding', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Upload Medical Document' })).toBeVisible();
    await expect(page.getByLabel('Upload Medical Document')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upload' })).toBeVisible();
    await expect(page.getByText('Supported: PDF, JPG, PNG. Max 10MB.')).toBeVisible();
  });

  test('should require file before allowing upload', async ({ page }) => {
    const uploadBtn = page.getByRole('button', { name: 'Upload' });
    await expect(uploadBtn).toBeDisabled();
  });

  test('should show selected file name after selecting file', async ({ page }) => {
    const filePath = path.join(__dirname, '../fixtures/test-document.pdf');
    await page.setInputFiles('#document-upload', filePath);
    await expect(page.getByText('Selected: test-document.pdf')).toBeVisible();
  });

  test('should show success message after uploading file', async ({ page }) => {
    const filePath = path.join(__dirname, '../fixtures/test-document.pdf');
    await page.setInputFiles('#document-upload', filePath);
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByText('Document uploaded successfully!')).toBeVisible();
  });
});
