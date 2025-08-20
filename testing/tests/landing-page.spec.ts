// playwright tests for LandingPage
import { test, expect } from '@playwright/test';

// Utility selectors
const joinNowCtaId = '#join-now-cta';

// These are the three feature cards on the landing page
const features = [
  {
    title: 'Shielded Conversations',
    description: 'Every message is protected by our digital shield, so you can focus on your health, not your privacy.'
  },
  {
    title: 'Easy Scheduling',
    description: 'Book appointments and manage your care with clarity and just a few clicks.'
  },
  {
    title: 'Peace of Mind',
    description: 'With ShieldLink Health, your wellness journey is always in safe hands.'
  }
];

test.describe('Landing Page UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the hero section (by main element)', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
    // Hero may have an h1 or graphic, but we check at least the main is visible
  });

  test('should display all three feature cards with correct content', async ({ page }) => {
    for (const feature of features) {
      const card = page.getByRole('heading', { name: feature.title });
      await expect(card).toBeVisible();
      await expect(card.locator('..')).toContainText(feature.description);
    }
  });

  test('should display the call-to-action section with Join Now button', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Ready to take control of your care\?/ })).toBeVisible();
    const joinNowButton = page.locator(joinNowCtaId);
    await expect(joinNowButton).toBeVisible();
    await expect(joinNowButton).toContainText('Join Now');
    await expect(joinNowButton.locator('a')).toHaveAttribute('href', '/signup');
  });

  test('Join Now CTA navigates to /signup', async ({ page }) => {
    const joinNowButton = page.locator(joinNowCtaId);
    await joinNowButton.click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('Navigation menu is visible and functional', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible();
    // Logo and brand name
    await expect(page.getByRole('link', { name: /ShieldLink Health/ })).toBeVisible();
    // About/Contact links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigation: About/Contact/Signup/Login links go to correct pages', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
    await page.goBack();
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await page.goBack();
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
    await page.goBack();
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('basic accessibility: main and navigation landmarks exist', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });

  test('feature cards have accessible headings and descriptions', async ({ page }) => {
    for (const feature of features) {
      const heading = page.getByRole('heading', { name: feature.title });
      await expect(heading).toBeVisible();
      // Ensure the description paragraph follows the heading
      const para = heading.locator('xpath=following-sibling::p[1]');
      await expect(para).toContainText(feature.description);
    }
  });
});
