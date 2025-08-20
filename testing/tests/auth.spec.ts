import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('login form submits and navigates to dashboard', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: /Welcome Back/ })).toBeVisible();
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: /Sign In/i }).click();
    await expect(page).toHaveURL(/\/dashboard/);
    await expect(page.getByText('Welcome back to ShieldLink Health!')).toBeVisible();
  });

  test('login form shows error if fields empty', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('button', { name: /Sign In/i }).click();
    await expect(page.getByText('Please enter your email and password.')).toBeVisible();
  });

  test('signup form submits, navigates to dashboard, and validates errors', async ({ page }) => {
    await page.goto('/signup');
    await expect(page.getByRole('heading', { name: /Create Your Account/ })).toBeVisible();
    // Error for empty fields
    await page.getByRole('button', { name: /Create Account/i }).click();
    await expect(page.getByText('Please fill in all fields.')).toBeVisible();
    // Error for mismatched passwords
    await page.getByLabel('Full Name').fill('Jane Doe');
    await page.getByLabel('Email').fill('jane@example.com');
    await page.getByLabel('Password').fill('mypassword');
    await page.getByLabel('Confirm Password').fill('notmatching');
    await page.getByRole('button', { name: /Create Account/i }).click();
    await expect(page.getByText('Passwords do not match.')).toBeVisible();
    // Successful signup
    await page.getByLabel('Confirm Password').fill('mypassword');
    await page.getByRole('button', { name: /Create Account/i }).click();
    await expect(page).toHaveURL(/\/dashboard/);
    await expect(page.getByText('Welcome back to ShieldLink Health!')).toBeVisible();
  });

  test('login and signup have accessible links for navigation', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('link', { name: /Forgot password/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Create account/ })).toBeVisible();
    await page.goto('/signup');
    await expect(page.getByRole('link', { name: /Already have an account/ })).toBeVisible();
  });
});
