import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload Medical Document Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/medical-records/upload');
  });

  test('shows upload form and instructions', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Upload Medical Document/ })).toBeVisible();
    await expect(page.getByText('Click or drag to upload')).toBeVisible();
    await expect(page.getByText('Supported: PDF, JPG, PNG. Max 10MB.')).toBeVisible();
    await expect(page.getByRole('button', { name: /Upload/i })).toBeDisabled();
  });

  test('enables upload button after file selected and shows file name', async ({ page, tmpPath }) => {
    const filePath = path.resolve(__dirname, '../assets/test.pdf');
    await page.setInputFiles('#document-upload', filePath);
    await expect(page.getByText('Selected: test.pdf')).toBeVisible();
    await expect(page.getByRole('button', { name: /Upload/i })).toBeEnabled();
  });

  test('shows success message after upload', async ({ page, tmpPath }) => {
    const filePath = path.resolve(__dirname, '../assets/test.pdf');
    await page.setInputFiles('#document-upload', filePath);
    await page.getByRole('button', { name: /Upload/i }).click();
    await expect(page.getByText('Document uploaded successfully!')).toBeVisible();
  });
});
