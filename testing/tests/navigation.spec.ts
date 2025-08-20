import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the logo and site name', async ({ page }) => {
    // Logo should be present (using role img if available, else fallback to alt text or selector)
    // Site name text
    await expect(page.getByText('ShieldLink Health')).toBeVisible();
    // Logo is likely present near this text
    const logo = page.locator('svg'); // Fallback for Logo component, may need adjustment
    await expect(logo.first()).toBeVisible();
  });

  test('shows About and Contact navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('shows Login and Sign Up buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to About page when About link is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
  });

  test('navigates to Contact page when Contact link is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test('navigates to Login page when Login button is clicked', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('navigates to Sign Up page when Sign Up button is clicked', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('Login button has secondary style on /login, outline elsewhere', async ({ page }) => {
    // On home page
    const loginBtn = page.locator('#nav-login');
    await expect(loginBtn).toHaveClass(/outline/);
    // Go to /login
    await page.goto('/login');
    await expect(page.locator('#nav-login')).toHaveClass(/secondary/);
  });

  test('Sign Up button uses brand color', async ({ page }) => {
    const signupBtn = page.locator('#nav-signup');
    await expect(signupBtn).toHaveCSS('background-color', 'rgb(29, 78, 216)'); // #1d4ed8
    await expect(signupBtn).toHaveCSS('color', 'rgb(255, 255, 255)');
  });
});
