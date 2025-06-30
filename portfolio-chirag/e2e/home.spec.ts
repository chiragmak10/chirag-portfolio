import { test, expect, Page } from '@playwright/test';

test.describe('Portfolio Home Page', () => {
  test.beforeEach(async ({ page }: { page: Page }) => {
    await page.goto('/');
  });

  test('should display hero section with name and role', async ({ page }: { page: Page }) => {
    await expect(page.getByText("Hi, I'm Chirag")).toBeVisible();
    await expect(page.getByText(/Frontend Developer specializing/i)).toBeVisible();
  });

  test('should display About section', async ({ page }: { page: Page }) => {
    await expect(page.getByRole('heading', { name: /About Me/i })).toBeVisible();
    await expect(page.getByText(/passionate frontend developer/i)).toBeVisible();
  });

  test('should display Skills section with all skills', async ({ page }: { page: Page }) => {
    await expect(page.getByRole('heading', { name: /Skills/i })).toBeVisible();
    for (const skill of ['React', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Data Viz']) {
      await expect(page.getByText(skill)).toBeVisible();
    }
  });

  test('should display Projects section and project cards', async ({ page }: { page: Page }) => {
    await expect(page.getByRole('heading', { name: /Projects/i })).toBeVisible();
    for (const project of [
      'DataViz Dashboard',
      'Portfolio Website',
      'Mastery Project',
      'Chat-App',
      'Landing Page Design for NFT project',
    ]) {
      await expect(page.getByText(project)).toBeVisible();
    }
  });

  test('should display Contact section and form fields', async ({ page }: { page: Page }) => {
    await expect(page.getByRole('heading', { name: /Contact/i })).toBeVisible();
    await expect(page.getByPlaceholder('Your Name')).toBeVisible();
    await expect(page.getByPlaceholder('Your Email')).toBeVisible();
    await expect(page.getByPlaceholder('Your Message')).toBeVisible();
    await expect(page.getByRole('button', { name: /Send Message/i })).toBeVisible();
  });

  test('should have working navigation links in Floating Dock', async ({ page }: { page: Page }) => {
    // Resume link
    const resumeLink = page.getByRole('link', { name: /Resume/i });
    await expect(resumeLink).toHaveAttribute('href', '/resume.pdf');
    // GitHub link
    const githubLink = page.getByRole('link', { name: /GitHub/i });
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/chirag');
  });

  test('should have floating dock visible', async ({ page }: { page: Page }) => {
    // The floating dock is always visible on desktop
    await expect(page.locator('.fixed.bottom-6.right-6')).toBeVisible();
  });
}); 