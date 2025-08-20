// Playwright test for Signup page
import { test, expect } from '@playwright/test';

test.describe('Signup Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
  });

  test('should display signup form and branding', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Create Your Account' })).toBeVisible();
    await expect(page.getByText('Sign up for ShieldLink Health Patient Portal')).toBeVisible();
    await expect(page.getByLabel('Full Name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByLabel('Confirm Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Already have an account?' })).toBeVisible();
  });

  test('should show error when submitting empty form', async ({ page }) => {
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.getByText('Please fill in all fields.')).toBeVisible();
  });

  test('should show error on password mismatch', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Jane Doe');
    await page.getByLabel('Email').fill('jane@example.com');
    await page.getByLabel('Password').fill('pass123');
    await page.getByLabel('Confirm Password').fill('pass124');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.getByText('Passwords do not match.')).toBeVisible();
  });

  test('should signup successfully and redirect to dashboard', async ({ page }) => {
    await page.getByLabel('Full Name').fill('John Smith');
    await page.getByLabel('Email').fill('john@example.com');
    await page.getByLabel('Password').fill('mypassword');
    await page.getByLabel('Confirm Password').fill('mypassword');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText('Welcome back to ShieldLink Health!')).toBeVisible();
  });
});
