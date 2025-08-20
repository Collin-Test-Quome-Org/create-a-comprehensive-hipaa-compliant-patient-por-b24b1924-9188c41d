import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload Medical Document Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/medical-records/upload');
    await expect(page.getByRole('heading', { name: 'Upload Medical Document' })).toBeVisible();
  });

  test('shows upload area and button disabled initially', async ({ page }) => {
    await expect(page.getByText('Click or drag to upload')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upload' })).toBeDisabled();
  });

  test('can select file and upload', async ({ page }, testInfo) => {
    // Use a real file from the test project (this file itself as dummy PDF)
    const filePath = path.resolve(__dirname, 'upload-documents.spec.ts');
    // Show file name after selection
    await page.setInputFiles('#document-upload', filePath);
    const fileName = path.basename(filePath);
    await expect(page.getByText(`Selected: ${fileName}`)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upload' })).toBeEnabled();
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByText('Document uploaded successfully!')).toBeVisible();
  });

  test('upload button stays disabled if no file selected', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Upload' })).toBeDisabled();
  });
});
