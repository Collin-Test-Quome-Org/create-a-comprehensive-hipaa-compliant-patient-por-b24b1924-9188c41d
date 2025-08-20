// Playwright test for Login page
import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should display login form and branding', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
    await expect(page.getByText('Sign in to ShieldLink Health Patient Portal')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Forgot password?' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Create account' })).toBeVisible();
  });

  test('should show error when submitting empty form', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByText('Please enter your email and password.')).toBeVisible();
  });

  test('should login successfully with any credentials', async ({ page }) => {
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('secretpassword');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText('Welcome back to ShieldLink Health!')).toBeVisible();
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.keyboard.press('Tab'); // Email
    await expect(page.getByLabel('Email')).toBeFocused();
    await page.keyboard.press('Tab'); // Password
    await expect(page.getByLabel('Password')).toBeFocused();
    await page.keyboard.press('Tab'); // Sign In button
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeFocused();
  });
});
